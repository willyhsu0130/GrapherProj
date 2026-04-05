import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useGraph } from "@/hooks/useGraph"
import { useCallback } from "react"

export const ActionsBar = () => {
    const { graph, saveSnapshot } = useGraph()

    const exportPng = useCallback(async () => {
        const snapshot = await saveSnapshot();
        if (!snapshot) return;
        const link = document.createElement('a');
        link.download = `${graph?.title ?? 'graph'}.png`;
        link.href = snapshot;
        link.click();
    }, [saveSnapshot, graph?.title]);


    const menus = [
        {
            label: "File",
            items: [
                { label: "Export PNG", action: exportPng },
                { label: "Export PDF" },
            ]
        },
        {
            label: "Edit",
            items: [
                { label: "Undo" },
                { label: "Redo" },
            ]
        },
        {
            label: "Insert",
            items: [
                { label: "Add Series" },
                { label: "Add Trendline" },
            ]
        },
        {
            label: "Format",
            items: [
                { label: "Styling" },
            ]
        },
        {
            label: "View",
            items: [
                { label: "Zoom In" },
                { label: "Zoom Out" },
            ]
        },
        {
            label: "Tools",
            items: [
                { label: "Settings" },
            ]
        },
    ]
    return (
        <div className="flex gap-x-3">
            {menus.map(menu => (
                <DropdownMenu key={menu.label}>
                    <DropdownMenuTrigger>
                        {menu.label}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="start">
                        <DropdownMenuGroup>
                            {menu.items.map(item => (
                                <DropdownMenuItem key={item.label} onClick={item.action}>
                                    <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    )
}