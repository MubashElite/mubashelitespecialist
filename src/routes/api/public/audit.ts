import { createFileRoute } from "@tanstack/react-router";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { generateText } from "ai";

const CATEGORIES = [
  "Homepage Quality", "Navigation", "Trust Signals", "Mobile Optimization",
  "Loading Speed", "Image Optimization", "SEO", "Technical SEO", "Accessibility",
  "Product Pages", "Collection Pages", "Checkout Experience", "Branding",
  "Conversion Optimization", "User Experience", "Performance", "Content Quality",
  "Internal Linking", "Call-to-Action Effectiveness", "Security", "Analytics Setup",
  "Schema Markup", "Email Capture", "Social Proof", "Sales Funnel",
];

const SYSTEM = `You are a senior Shopify & eCommerce CRO auditor. Given a store URL, produce a realistic, professional audit. Be specific, avoid generic filler. Return ONLY valid JSON matching the schema. Scores 0-100.`;

const promptFor = (url: string) => `Audit this eCommerce store: ${url}

Return JSON with this exact shape (no markdown, no commentary):
{
  "overallScore": number,
  "summary": "2-3 sentences overview",
  "categories": [ { "name": "<one of the 25 categories>", "score": 0-100, "comment": "1 specific sentence" } ],
  "strengths": ["string", ...],
  "weaknesses": ["string", ...],
  "priorityFixes": ["string", ...],
  "quickWins": ["string", ...],
  "longTerm": ["string", ...]
}

Categories to cover (all 25, in order): ${CATEGORIES.join(", ")}.
Make scores realistic — vary them, don't cluster around 70. Comments must be store-specific and actionable.`;

type Body = { url?: string };

function isValidUrl(s: string) {
  try {
    const u = new URL(s.startsWith("http") ? s : `https://${s}`);
    return ["http:", "https:"].includes(u.protocol);
  } catch { return false; }
}

export const Route = createFileRoute("/api/public/audit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { url } = (await request.json()) as Body;
          if (!url || typeof url !== "string" || !isValidUrl(url)) {
            return new Response(JSON.stringify({ error: "Valid URL required" }), { status: 400 });
          }
          const normalized = url.startsWith("http") ? url : `https://${url}`;

          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);

          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 45000);

          const { text } = await generateText({
            model: gateway("google/gemini-3-flash-preview"),
            system: SYSTEM,
            prompt: promptFor(normalized),
            abortSignal: controller.signal,
          });
          clearTimeout(timeout);

          const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
          let parsed;
          try { parsed = JSON.parse(cleaned); }
          catch {
            const match = cleaned.match(/\{[\s\S]*\}/);
            if (!match) throw new Error("AI returned invalid JSON");
            parsed = JSON.parse(match[0]);
          }
          return Response.json({ url: normalized, ...parsed });
        } catch (err) {
          console.error("[api/public/audit] error:", err);
          const msg = err instanceof Error ? err.message : "";
          const status = msg.includes("aborted") ? 504
            : msg.includes("429") ? 429
            : msg.includes("402") ? 402
            : 500;
          return new Response(
            JSON.stringify({ error: "Audit failed. Please try again." }),
            { status },
          );
        }
      },
    },
  },
});
