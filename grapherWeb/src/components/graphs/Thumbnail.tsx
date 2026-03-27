import { Link } from "react-router-dom"

interface ThumbnailProps {
    graphId: number;
    title: string;
    png?: string;
}

export const Thumbnail = ({ graphId, title, png }: ThumbnailProps) => {
    return (
        <Link
            to={`/graphs/${graphId}`}
            className="group bg-black border-none flex flex-col h-full no-underline"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Preview area */}
            <div className="flex-1 bg-white overflow-hidden relative">
                {png &&
                    <img
                        src={png}
                        className="w-full h-full object-contain"
                    />
                }

            </div>

            {/* Title bar */}
            <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/60 group-hover:text-white transition-colors truncate">
                    {title}
                </span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors text-xs ml-2">→</span>
            </div>
        </Link>
    )
}