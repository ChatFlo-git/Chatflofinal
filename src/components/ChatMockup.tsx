import { clsx } from "@/lib/clsx";

export interface ChatMessage {
  /** "in" = received (white bubble, left). "out" = sent by business/ChatFlo (green bubble, right). */
  from: "in" | "out";
  text: string;
  time?: string;
  /** Render as a quick-reply button row instead of a bubble. */
  buttons?: string[];
}

interface ChatMockupProps {
  contactName: string;
  /** Subtext under the name, e.g. "ChatFlo Assistant" or "online". */
  status?: string;
  messages: ChatMessage[];
  className?: string;
}

function DoubleTick() {
  return (
    <svg viewBox="0 0 18 12" width="16" height="11" aria-hidden className="inline-block text-sky-500">
      <path
        fill="currentColor"
        d="M11.07.65a.6.6 0 0 1 .04.85L5.4 8.2a.6.6 0 0 1-.88.03L1.9 5.6a.6.6 0 1 1 .85-.85l2.16 2.17L10.22.7a.6.6 0 0 1 .85-.05Zm3.9 0a.6.6 0 0 1 .04.85L9.3 8.2a.6.6 0 0 1-.86.05l-.5-.48.83-1 .05.05 5.3-6.12a.6.6 0 0 1 .85-.05Z"
      />
    </svg>
  );
}

/**
 * Styled WhatsApp chat mockup. The single most persuasive element on the site —
 * reused in the hero, NRI spotlight, industry pages and features. Pure CSS, no images.
 */
export function ChatMockup({ contactName, status = "online", messages, className }: ChatMockupProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-brand-900/15",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-brand-700 px-4 py-3 text-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
          {contactName.charAt(0)}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{contactName}</p>
          <p className="text-xs text-white/70">{status}</p>
        </div>
        <svg viewBox="0 0 24 24" width="20" height="20" className="ml-auto opacity-80" aria-hidden>
          <path fill="currentColor" d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      </div>

      {/* Conversation */}
      <div
        className="space-y-2 px-3 py-4"
        style={{
          backgroundColor: "var(--color-whatsapp-bg)",
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        {messages.map((m, i) =>
          m.buttons ? (
            <div key={i} className="flex flex-col gap-1.5 pt-1">
              {m.buttons.map((b) => (
                <div
                  key={b}
                  className="mx-auto w-[85%] rounded-lg bg-white py-2 text-center text-sm font-medium text-brand-600 shadow-sm"
                >
                  {b}
                </div>
              ))}
            </div>
          ) : (
            <div key={i} className={clsx("flex", m.from === "out" ? "justify-end" : "justify-start")}>
              <div
                className={clsx(
                  "relative max-w-[80%] rounded-lg px-3 py-1.5 text-[13.5px] leading-snug shadow-sm",
                  m.from === "out" ? "rounded-tr-none text-ink-900" : "rounded-tl-none bg-white text-ink-900",
                )}
                style={m.from === "out" ? { backgroundColor: "var(--color-whatsapp-bubble)" } : undefined}
              >
                <span className="whitespace-pre-line">{m.text}</span>
                <span className="float-right ml-2 mt-1.5 flex items-center gap-0.5 text-[10px] text-ink-400">
                  {m.time ?? ""}
                  {m.from === "out" && <DoubleTick />}
                </span>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Input bar (decorative) */}
      <div className="flex items-center gap-2 bg-ink-50 px-3 py-2">
        <div className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-ink-400">Type a message…</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: "var(--color-whatsapp)" }}>
          <svg viewBox="0 0 24 24" width="16" height="16" className="text-white" aria-hidden>
            <path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
