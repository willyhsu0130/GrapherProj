import { useError } from "@/hooks/useError"
import { Link } from "react-router-dom"
import { AlertCircleIcon, ArrowLeft } from 'lucide-react'

const ErrorPage = () => {
    const { errorMessage } = useError()

    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Header / Nav - Keeps it consistent with Login/Dashboard */}
            <nav className="flex justify-between items-center px-8 py-6 border-b border-white/5">
                <div className="text-xl font-medium tracking-tighter">
                    grapher<span className="text-white/30">.</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    System / Error
                </div>
            </nav>

            {/* Main Container */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-100 text-center space-y-8">
                    
                    {/* The "404" or Error Icon */}
                    <div className="flex justify-center">
                        <div className="p-4 rounded-full border border-white/5 bg-white/2">
                            <AlertCircleIcon size={32} className="text-white/20" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-medium tracking-tight">Something went wrong</h1>
                        <p className="text-xs text-white/40 leading-relaxed px-8">
                            {errorMessage || "The graph you're looking for doesn't exist or you don't have permission to view it."}
                        </p>
                    </div>

                    {/* Action Area */}
                    <div className="pt-4 flex flex-col items-center gap-6">
                        <Link 
                            to="/graphs" 
                            className="bg-white text-black px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white/90 active:scale-[0.98] transition-all flex items-center gap-2"
                        >
                            <ArrowLeft size={12} />
                            Return to workspace
                        </Link>

                        <div className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                            Error Code: 404_NOT_FOUND
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default ErrorPage