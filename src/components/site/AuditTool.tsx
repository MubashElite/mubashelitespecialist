import { useState } from "react";
import { Loader2, Search, Download, AlertCircle, CheckCircle2 } from "lucide-react";

type Category = { name: string; score: number; comment: string };
type Report = {
  url: string;
  overallScore: number;
  summary: string;
  categories: Category[];
  strengths: string[];
  weaknesses: string[];
  priorityFixes: string[];
  quickWins: string[];
  longTerm: string[];
};

function scoreColor(s: number) {
  if (s >= 80) return "var(--success)";
  if (s >= 60) return "var(--warning)";
  if (s >= 40) return "oklch(0.72 0.18 50)";
  return "var(--danger)";
}

function ScoreRing({ score, size = 140 }: { score: number; size?: number }) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(1 0 0 / 8%)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={scoreColor(score)} strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)" }}
      />
      <text
        x="50%" y="50%" textAnchor="middle" dy=".35em"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
        className="fill-foreground font-display font-bold"
        style={{ fontSize: size * 0.28 }}
      >
        {score}
      </text>
    </svg>
  );
}

function downloadReport(r: Report) {
  const lines = [
    `MUBASH ELITE SPECIALIST — STORE AUDIT REPORT`,
    `===============================================`,
    `URL: ${r.url}`,
    `Overall Score: ${r.overallScore}/100`,
    ``,
    `SUMMARY`,
    r.summary,
    ``,
    `CATEGORY SCORES`,
    ...r.categories.map((c) => `• ${c.name.padEnd(28)} ${String(c.score).padStart(3)}/100  — ${c.comment}`),
    ``,
    `STRENGTHS`,
    ...r.strengths.map((s) => `✓ ${s}`),
    ``,
    `WEAKNESSES`,
    ...r.weaknesses.map((s) => `✗ ${s}`),
    ``,
    `PRIORITY FIXES`,
    ...r.priorityFixes.map((s) => `! ${s}`),
    ``,
    `QUICK WINS`,
    ...r.quickWins.map((s) => `→ ${s}`),
    ``,
    `LONG-TERM RECOMMENDATIONS`,
    ...r.longTerm.map((s) => `» ${s}`),
    ``,
    `For a complete professional audit, email mubashelitespecialist@gmail.com`,
  ].join("\n");
  const blob = new Blob([lines], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `audit-${new URL(r.url).hostname}.txt`;
  a.click();
}

export function AuditTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setReport(null);
    if (!url.trim()) { setError("Please enter a website URL."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/public/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 429) throw new Error("Audits are temporarily rate limited. Please try again in a moment.");
        if (res.status === 402) throw new Error("Audit service is unavailable right now. Please try again later.");
        if (res.status === 504) throw new Error("The audit took too long. Please try again.");
        throw new Error(data.error || "Couldn't complete the audit.");
      }
      const data = (await res.json()) as Report;
      setReport(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-10 shadow-elegant">
      <form onSubmit={run} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center gap-2 bg-background/40 border border-white/10 rounded-xl px-4">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourstore.com"
            className="flex-1 bg-transparent py-3.5 text-sm focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-white text-sm font-medium shadow-glow disabled:opacity-60"
        >
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Auditing…</> : "Run AI Audit"}
        </button>
      </form>

      {error && (
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> {error}
        </div>
      )}

      {loading && !report && (
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[0,1,2].map((i) => (
            <div key={i} className="h-32 rounded-2xl bg-white/5 animate-pulse" />
          ))}
        </div>
      )}

      {report && (
        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-background/30 border border-white/10">
            <ScoreRing score={report.overallScore} />
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Overall score for</div>
              <div className="font-display text-xl font-semibold break-all">{report.url}</div>
              <p className="mt-2 text-sm text-muted-foreground">{report.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <button onClick={() => downloadReport(report)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition">
                  <Download className="h-4 w-4" /> Download report
                </button>
                <a href="mailto:mubashelitespecialist@gmail.com?subject=Request%20for%20Advanced%20Store%20Audit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm shadow-glow">
                  Request a Complete Professional Audit
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {report.categories.map((c) => (
              <div key={c.name} className="p-4 rounded-xl bg-background/30 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-sm font-semibold" style={{ color: scoreColor(c.score) }}>{c.score}</div>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${c.score}%`, background: scoreColor(c.score) }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{c.comment}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Group title="Strengths" items={report.strengths} color="success" icon={<CheckCircle2 className="h-4 w-4" />} />
            <Group title="Weaknesses" items={report.weaknesses} color="danger" icon={<AlertCircle className="h-4 w-4" />} />
            <Group title="Priority Fixes" items={report.priorityFixes} color="warning" />
            <Group title="Quick Wins" items={report.quickWins} color="cyan" />
            <Group title="Long-Term Recommendations" items={report.longTerm} color="royal" wide />
          </div>
        </div>
      )}
    </div>
  );
}

function Group({ title, items, color, icon, wide }: { title: string; items: string[]; color: string; icon?: React.ReactNode; wide?: boolean }) {
  if (!items?.length) return null;
  return (
    <div className={`p-5 rounded-2xl bg-background/30 border border-white/10 ${wide ? "md:col-span-2" : ""}`}>
      <div className="flex items-center gap-2 mb-3 text-sm font-semibold" style={{ color: `var(--${color})` }}>
        {icon} {title}
      </div>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: `var(--${color})` }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
