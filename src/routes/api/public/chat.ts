import { createFileRoute } from "@tanstack/react-router";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { generateText } from "ai";

const SYSTEM = `You are the personal AI assistant for "Mubash Elite Specialist", an independent Shopify Expert, Wix Specialist, SEO Consultant, AI Automation Engineer and eCommerce growth partner.

Tone: warm, confident, concise, professional. Sound like a real human expert — never robotic. No emoji spam, no buzzword soup, no "As an AI" disclaimers.

You can answer questions about:
- Services (Shopify design/dev/custom code/speed, Wix Studio, SEO, CRO, Klaviyo, AI automation, store migrations, maintenance)
- Pricing tiers: Starter $150, Growth $450, Professional $900, Elite $1500+
- Typical process and turnaround (most projects 1–3 weeks)
- General eCommerce, Shopify, Wix, SEO, email marketing, AI automation questions
- Availability and how to get started

If asked to do something outside scope (write essays, do homework, generate code unrelated to consulting), politely redirect.

When relevant, suggest the visitor book a free consultation on WhatsApp (https://wa.me/17542504531) or email mubashelitespecialist@gmail.com.

Keep replies under ~150 words unless the question genuinely needs more.`;

type ChatBody = { messages?: { role: "user" | "assistant"; content: string }[] };

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as ChatBody;
          if (!Array.isArray(messages) || messages.length === 0) {
            return new Response(JSON.stringify({ error: "messages required" }), { status: 400 });
          }
          const trimmed = messages.slice(-20).map((m) => ({
            role: m.role,
            content: String(m.content ?? "").slice(0, 2000),
          }));

          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);
          const { text } = await generateText({
            model: gateway("google/gemini-3-flash-preview"),
            system: SYSTEM,
            messages: trimmed,
          });
          return Response.json({ text });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Unknown error";
          const status = msg.includes("429") ? 429 : msg.includes("402") ? 402 : 500;
          return new Response(JSON.stringify({ error: msg }), { status });
        }
      },
    },
  },
});
