import { ShieldCheck, Quote } from "lucide-react";

const CLOUD_NAME = "rkyfvlbv";
const PUBLIC_ID = "WhatsApp_Video_2026-08-06_at_00.10.48_f0n2s4";

/** Cloudinary auto-generated transcript for this asset (used as a caption track). */
const TRANSCRIPT_URL = `https://res.cloudinary.com/${CLOUD_NAME}/raw/upload/${PUBLIC_ID}.transcript`;

export const BUYER_REVIEW_POSTER = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_2,w_720,q_auto,f_jpg/${PUBLIC_ID}.jpg`;

export const BUYER_REVIEW_EMBED_URL =
  `https://player.cloudinary.com/embed/?cloud_name=${CLOUD_NAME}&public_id=${PUBLIC_ID}` +
  `&player[fluid]=true&player[controls]=true&player[autoplay]=false&player[muted]=false&player[showJumpControls]=true&player[colors][accent]=%23b98a4a` +
  `&source[textTracks][captions][label]=English` +
  `&source[textTracks][captions][url]=${encodeURIComponent(TRANSCRIPT_URL)}` +
  `&source[textTracks][captions][default]=true`;

/** Responsive Cloudinary player, portrait 9:16 source, captions enabled where supported. */
export function BuyerReviewPlayer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-elegant ${className}`}
      style={{ aspectRatio: "9 / 16" }}
    >
      <iframe
        src={BUYER_REVIEW_EMBED_URL}
        title="Client review: Shopify store optimization"
        loading="lazy"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

/** Prominent buyer-testimonial block used on the homepage and the sales proof page. */
export function BuyerReviewFeature() {
  return (
    <div className="reveal glass rounded-3xl border border-border p-5 sm:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
        <div className="mx-auto w-full max-w-[320px]">
          <BuyerReviewPlayer />
        </div>
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan">
            <ShieldCheck className="h-3 w-3" /> Client Review
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
            A buyer shares their experience <span className="gradient-text">in their own words</span>
          </h3>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Unedited video feedback from a client after their Shopify store optimization. Real buyer feedback,
            real experience, recorded by the client themselves.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["Buyer testimonial", "English captions available", "Unscripted feedback"].map((t) => (
              <span key={t} className="rounded-full border border-cyan/30 bg-royal/10 px-3 py-1.5 font-semibold text-cyan">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
            <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" />
            Play the video to hear the full review. Captions can be toggled in the player controls.
          </p>
        </div>
      </div>
    </div>
  );
}
