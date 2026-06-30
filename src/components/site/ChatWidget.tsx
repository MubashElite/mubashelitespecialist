import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content: "Hey, I'm Mubash's AI assistant. Ask me anything about Shopify, Wix, SEO, pricing, or how we can work together.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) {
        if (res.status === 429) throw new Error("Too many requests — please wait a moment.");
        if (res.status === 402) throw new Error("Service temporarily unavailable.");
        throw new Error("Couldn't get a reply. Try again.");
      }
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.text || "Sorry, I had trouble answering that." }]);
    } catch (err) {
      setMessages((m) => [...m, { role: "assistant", content: err instanceof Error ? err.message : "Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 grid place-items-center rounded-full gradient-primary text-white shadow-glow hover:scale-105 transition"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[560px] max-h-[80vh] glass rounded-2xl shadow-elegant flex flex-col overflow-hidden animate-fade-up">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full gradient-primary grid place-items-center text-white font-semibold text-sm">M</div>
            <div>
              <div className="text-sm font-semibold">Mubash Assistant</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Online · usually replies in seconds
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                  m.role === "user" ? "gradient-primary text-white" : "bg-white/5 border border-white/10 text-foreground"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" /> Thinking…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t border-white/10">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
                }}
                placeholder="Ask about services, pricing, process…"
                className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring max-h-32"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="h-10 w-10 grid place-items-center rounded-xl gradient-primary text-white disabled:opacity-40 transition"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
