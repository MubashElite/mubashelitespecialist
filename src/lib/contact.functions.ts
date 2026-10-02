import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const TO_EMAIL = "info@mubashelite.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      return { ok: false as const, reason: "unconfigured" as const };
    }

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    if (!lovableApiKey) {
      return { ok: false as const, reason: "unconfigured" as const };
    }

    const from = process.env["CONTACT_FROM_EMAIL"] ?? "Mubash Elite <website@mubashelite.com>";

    try {
      const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: `[Website] ${data.subject}`,
          html: `
            <h2>New enquiry from mubashelite.com</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Email provider request failed", res.status, await res.text());
        return { ok: false as const, reason: "failed" as const };
      }
      return { ok: true as const };
    } catch (error) {
      console.error("Contact send failed", error);
      return { ok: false as const, reason: "failed" as const };
    }
  });
