import { Link } from "react-router-dom"
import { Ellipsis, Trash2, Trash2Icon } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useError } from "@/hooks/useError";
import { deleteGraphByGraphId } from "@/services/fetchers";
import type { Graph } from "@/models/graph/Graph";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,

    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



interface ThumbnailProps {
    graphId: number;
    title: string;
    png?: string;
    onDeleteSuccess: (newList: Graph[] | undefined) => void;
}

export const Thumbnail = ({ graphId, title, png, onDeleteSuccess }: ThumbnailProps) => {
    const { setErrorMessage } = useError()

    const executeDelete = async () => {
        try {
            const res = await deleteGraphByGraphId({ id: graphId });
            if (res.success) {
                onDeleteSuccess(res.data);
            } else {
                setErrorMessage(res.message || "Delete Failed");
            }
        } catch (error) {
            console.log(error)
            setErrorMessage("Network error during delete.");
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
                <span className="text-xs text-white/60 group-hover:text-white truncate">
                    {title}
                </span>
                <div className="flex items-center gap-3">
                    <div onClick={handleMenuClick} className="relative z-30">
                        <AlertDialog>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className="flex p-1.5 rounded-md items-center text-white/30 hover:bg-white/10 outline-none border-none">
                                        <Ellipsis size={14} className="items-center" />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className=" bg-black border-white/10 text-white w-full" align="end">
                                    <AlertDialogTrigger >
                                        <DropdownMenuItem
                                            id={`delete${title}`}
                                            onSelect={(e) => e.preventDefault()}
                                            className="cursor-pointer flex w-full"
                                        >
                                            <div className="flex gap-x-1">
                                                <Trash2 size={12} />
                                                <span className="">Delete Graph</span>
                                            </div>

                                        </DropdownMenuItem>
                                    </AlertDialogTrigger>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <AlertDialogContent size="sm">
                                <AlertDialogHeader>
                                    <div>
                                        <Trash2Icon className="text-red-500" size={24} />
                                    </div>
                                    <AlertDialogTitle>
                                        Delete Graph?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete <b>{title}</b> and remove all data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={executeDelete}
                                        id="confirmDelete"
                                    >
                                        Confirm Delete
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <span className="text-white/10 group-hover:text-white/40 text-xs ml-2">→</span>
                </div>
            </div>
        </Link>
    )
}