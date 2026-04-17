import { Link } from "react-router-dom"
import { Ellipsis } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useError } from "@/hooks/useError";
import { deleteGraphByGraphId } from "@/services/fetchers";
import type { Graph } from "@/models/graph/Graph";


interface ThumbnailProps {
    graphId: number;
    title: string;
    png?: string;
    onDeleteSuccess: (newList: Graph[] | undefined) => void;
}

export const Thumbnail = ({ graphId, title, png, onDeleteSuccess }: ThumbnailProps) => {
    const { setErrorMessage } = useError()
    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // Optional: Add a confirm popup to satisfy Project Requirement 3.2.5
        if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            const res = await deleteGraphByGraphId({ id: graphId });

            if (res.success) {
                onDeleteSuccess(res.data)
            } else {
                console.error("Delete failed:", res.message);
                setErrorMessage(res.message || "Delete Failed")
            }
        } catch (error) {
            console.error("Network error during delete:", error);
        }
    };

    const handleMenuClick = (e: React.MouseEvent) => {
        e.preventDefault();   // Stops the <Link> from navigating
        e.stopPropagation();  // Stops the click from "bubbling" up to the <Link>
    };



    return (
        <Link
            to={`/graphs/${graphId}`}
            className="group bg-black border-none flex flex-col h-full no-underline"
            style={{ fontFamily: "'Geist', sans-serif" }}
            id={title}
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
                <div className="flex" >
                    <div onClick={handleMenuClick}>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Ellipsis color="white" className="white/20 z-20" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={handleDelete}>
                                        <DropdownMenuLabel>Delete Graph</DropdownMenuLabel>
                                    </DropdownMenuItem>

                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <span className="text-white/20 group-hover:text-white/60 transition-colors text-xs ml-2">→</span>
                </div>

            </div>
        </Link>
    )
}