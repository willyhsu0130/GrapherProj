import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Nav */}
            <nav className="flex justify-between items-center px-12 py-6 border-b border-white/10">
                <div className="text-xl font-semibold tracking-tight">
                    grapher<span className="text-white/40">.</span>
                </div>
                <div className="flex items-center gap-6">
                    {/* FIXED: Added missing <a> tag here */}
                    <a
                        href="#features"
                        className="text-xs text-white/40 uppercase tracking-widest hover:text-white transition-colors no-underline"
                    >
                        Features
                    </a>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-xs text-white/40 uppercase tracking-widest hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                        Sign in
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm text-center">
                    <h1 className="text-3xl font-semibold tracking-tight mb-2">
                        Your data, visualized.
                    </h1>
                    <p className="text-xs text-white/40 mb-8 leading-loose">
                        Paste your data, pick your axes, and get publication-ready charts in seconds.
                    </p>
                    <div className="flex flex-col gap-3 items-center">
                        <button
                            onClick={() => navigate("/signup")}
                            className="w-full bg-white text-black py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-white/80 transition-opacity cursor-pointer border-none"
                        >
                            Start for free
                        </button>
                        <button
                            onClick={() => navigate("/login")}
                            className="text-xs text-white/40 uppercase tracking-widest hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                        >
                            Sign in →
                        </button>
                    </div>
                </div>
            </div>

            {/* Features */}
            <section id="features" className="border-t border-white/10">
                <div className="max-w-4xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { num: "01", title: "Spreadsheet input", desc: "Type directly or paste from Excel. Your data stays exactly as entered." },
                        { num: "02", title: "Live preview", desc: "Changes reflect instantly. No save button, no reload." },
                        { num: "03", title: "Auto-save", desc: "Every keystroke is saved. Pick up right where you left off." },
                    ].map((f, i) => (
                        <div key={i}>
                            <p className="text-xs text-white/30 tracking-widest mb-3">{f.num}</p>
                            <h3 className="text-sm font-medium mb-2">{f.title}</h3>
                            <p className="text-xs text-white/40 leading-loose">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="px-12 py-6 border-t border-white/10 flex justify-between items-center">
                <div className="text-sm font-semibold tracking-tight">
                    grapher<span className="text-white/40">.</span>
                </div>
                <p className="text-xs text-white/30">© 2026 Grapher</p>
            </footer>
        </div>
    );
};

export default Index;