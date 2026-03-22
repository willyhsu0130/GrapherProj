import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div style={{ fontFamily: "'DM Mono', monospace" }} className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* Nav */}
            <nav className="flex justify-between items-center px-12 py-6">
                <div className="font-serif text-xl tracking-tight">
                    Grapher<span className="text-white">.</span>
                </div>
                <ul className="flex gap-6 list-none items-center m-0 p-0">
                    <li>
                        <a href="#features" className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors no-underline">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors no-underline">
                            Docs
                        </a>
                    </li>
                    <li>
                        <Button
                            onClick={() => navigate("/login")}
                            variant="outline"
                            size="sm"
                            className="rounded-none text-xs uppercase tracking-widest border-white/20 bg-black text-white hover:bg-white hover:text-black transition-all"
                        >
                            Sign in
                        </Button>
                    </li>
                </ul>
            </nav>

            <Separator className="bg-white/10" />

            {/* Hero */}
            <section className="max-w-5xl mx-auto px-12 pt-28 pb-20">
                <Badge
                    variant="outline"
                    className="rounded-none text-xs uppercase tracking-[0.15em] border-white/30 text-white/60 mb-8"
                >
                    Open beta — free to use
                </Badge>
                <h1 className="text-8xl leading-none tracking-tight font-serif font-normal mb-8 max-w-3xl">
                    Your data,<br /><em className="italic">visualized.</em>
                </h1>
                <p className="text-sm text-white/40 max-w-sm leading-loose mb-12">
                    Paste your data, pick your axes, and get publication-ready charts in seconds. No configuration hell.
                </p>
                <div className="flex gap-4 items-center">
                    <Button
                        onClick={() => navigate("/register")}
                        className="rounded-none text-xs uppercase tracking-widest bg-white text-black hover:bg-white/80 px-8 h-11"
                    >
                        Start for free
                    </Button>
                    <Button
                        onClick={() => navigate("/dashboard")}
                        variant="outline"
                        className="rounded-none text-xs uppercase tracking-widest border-white/10 text-white/40 hover:text-white hover:border-white/40 hover:bg-transparent px-8 h-11"
                    >
                        See examples →
                    </Button>
                </div>
            </section>

            {/* App preview */}
            <div className="mx-12 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-xs text-white/30 ml-2 tracking-wide">Grapher — untitled graph</span>
                </div>

                <Separator className="bg-white/10" />

                <div className="grid grid-cols-2 min-h-[280px]">
                    {/* Sheet side */}
                    <div className="border-r border-white/10 p-4">
                        <div className="grid gap-px" style={{ gridTemplateColumns: "40px repeat(4, 1fr)" }}>
                            {["", "A", "B", "C", "D"].map((h, i) => (
                                <div key={i} className="px-2 py-1.5 text-xs text-center bg-white/5 text-white/60">{h}</div>
                            ))}
                            {[
                                ["1", "Month", "Revenue", "Users", "Churn"],
                                ["2", "Jan", "12400", "340", "2.1"],
                                ["3", "Feb", "18200", "512", "1.8"],
                                ["4", "Mar", "24100", "689", "1.4"],
                                ["5", "Apr", "31500", "891", "1.1"],
                            ].map((row, ri) =>
                                row.map((cell, ci) => (
                                    <div
                                        key={`${ri}-${ci}`}
                                        className={`px-2 py-1.5 text-xs ${
                                            ci === 0
                                                ? "text-center bg-white/5 text-white/40"
                                                : ri === 0
                                                ? "text-white/80 bg-white/[0.03]"
                                                : "text-right text-white/40"
                                        }`}
                                    >
                                        {cell}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Chart side */}
                    <div className="p-6 flex flex-col justify-end">
                        <p className="text-xs uppercase tracking-widest text-white/30 mb-6">Revenue / month</p>
                        <div className="flex items-end gap-3 h-44">
                            {[
                                { h: 35, label: "Jan" },
                                { h: 52, label: "Feb" },
                                { h: 68, label: "Mar" },
                                { h: 90, label: "Apr" },
                            ].map((bar, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                                    <div
                                        className="w-full"
                                        style={{
                                            height: `${bar.h}%`,
                                            background: i === 3 ? "white" : `rgba(255,255,255,${0.1 + i * 0.07})`,
                                            borderRadius: "2px 2px 0 0",
                                        }}
                                    />
                                    <span className="text-xs text-white/30">{bar.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <section id="features" className="max-w-5xl mx-auto px-12 py-20">
                <div className="grid grid-cols-3 border border-white/10">
                    {[
                        { num: "01", title: "Spreadsheet input", desc: "Type directly into the grid or paste from Excel. Your data stays exactly as you entered it." },
                        { num: "02", title: "Live preview", desc: "Changes reflect instantly. No save button, no reload. Just type and watch the chart update." },
                        { num: "03", title: "Auto-save", desc: "Every keystroke is saved to your account. Come back days later and pick up right where you left off." },
                    ].map((f, i) => (
                        <div key={i} className={`p-10 hover:bg-white/[0.02] transition-colors ${i < 2 ? "border-r border-white/10" : ""}`}>
                            <p className="text-xs text-white/30 tracking-widest mb-6">{f.num}</p>
                            <h3 className="font-serif text-xl font-normal mb-3">{f.title}</h3>
                            <p className="text-xs text-white/40 leading-loose">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="mx-12 mb-20 border border-white/10 px-16 py-20 flex justify-between items-center gap-8">
                <h2 className="font-serif text-5xl font-normal leading-tight max-w-md">
                    Ready to make<br />your data <em className="italic">speak?</em>
                </h2>
                <div className="flex flex-col gap-3 items-start">
                    <Button
                        onClick={() => navigate("/register")}
                        className="rounded-none text-xs uppercase tracking-widest bg-white text-black hover:bg-white/80 px-8 h-11"
                    >
                        Create your first graph →
                    </Button>
                    <p className="text-xs text-white/30">No credit card required</p>
                </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Footer */}
            <footer className="px-12 py-6 flex justify-between items-center">
                <div className="font-serif text-sm">Grapher<span>.</span></div>
                <p className="text-xs text-white/30">Built with Spring Boot + React</p>
                <p className="text-xs text-white/30">© 2026 Grapher</p>
            </footer>
        </div>
    );
};

export default Index;