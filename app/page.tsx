export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Typing Practice<br />
          <span className="text-[#58a6ff]">From Any Text Content</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste a book excerpt, article, or code snippet and instantly get structured typing sessions with live WPM tracking and progress analytics.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Practicing — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
        {[
          { icon: "⌨️", title: "Any Text Source", desc: "Paste, upload, or provide a URL" },
          { icon: "📊", title: "Live WPM Tracking", desc: "Real-time speed and accuracy metrics" },
          { icon: "📈", title: "Progress Analytics", desc: "Track improvement over time" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited text imports",
              "Real-time WPM & accuracy tracking",
              "Progress analytics dashboard",
              "API access for integrations",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What kinds of text can I use?",
              a: "Any plain text — book chapters, blog articles, documentation, or source code. Paste it directly, upload a .txt file, or provide a URL."
            },
            {
              q: "How does WPM tracking work?",
              a: "As you type each session, the app measures your words per minute and accuracy in real time, storing results so you can see your progress over sessions."
            },
            {
              q: "Can I integrate this into my platform?",
              a: "Yes. The Pro plan includes full API access so typing bootcamps and educational platforms can embed sessions or pull analytics programmatically."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Typing Practice Generator. All rights reserved.
      </footer>
    </main>
  );
}
