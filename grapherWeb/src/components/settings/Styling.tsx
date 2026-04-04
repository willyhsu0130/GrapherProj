import { useState } from "react"
import { useGraph } from "@/hooks/useGraph"
import { HexColorPicker } from "react-colorful"
import {
    Combobox, ComboboxContent, ComboboxEmpty,
    ComboboxInput, ComboboxItem, ComboboxList,
} from "@/components/ui/combobox"

import {
    ItemContent,
    ItemTitle,
} from "@/components/ui/item"

import { Label } from "@/components/ui/label"
import type { Series } from "@/models/API/APITypes"
import type { Trendline } from "@/models/API/APITypes"
import { Input } from "../ui/input"

type SelectableItem = (Series | Trendline) & { _type: "series" | "trendline" };

export const Styling = () => {
    const { graph, updateGraph } = useGraph()
    const series = graph?.series ?? []
    const trendlines = graph?.trendlines

    const combined: SelectableItem[] = [
        ...(series ?? []).map(s => ({ ...s, _type: "series" as const })),
        ...(trendlines ?? []).map(t => ({ ...t, _type: "trendline" as const })),
    ];

    const [selected, setSelected] = useState<SelectableItem | null>(null);


    const handleColorChange = (color: string) => {
        if (!selected) return;

        if (selected._type === "series") {
            updateGraph({
                series: series.map(s => s.id === selected.id ? { ...s, color } : s)
            });
        } else {
            updateGraph({
                trendlines: (trendlines ?? []).map(t =>
                    t && t.id === selected.id ? { ...t, color, type: t.type } : t
                )
            });
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <Combobox
                items={combined}
                itemToStringValue={(item: Series) => item.title?.content ?? ""}
                value={selected?.title}
                onValueChange={(val) => setSelected(val as SelectableItem)}
                autoHighlight
                autoComplete=""
            >
                <ComboboxInput placeholder="Select a series to modify" value={selected?.title?.content ?? ""} />
                <ComboboxContent>
                    <ComboboxEmpty>No series found.</ComboboxEmpty>
                    <ComboboxList>
                        {(item: Series) => (
                            <ComboboxItem key={item.title?.content} value={item} title={item.title?.content ?? ""}>
                                <ItemContent>
                                    <ItemTitle className="whitespace-nowrap">
                                        {item.title?.content}
                                    </ItemTitle>
                                </ItemContent>
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

            {selected && (
                <div className="flex flex-col gap-2">
                    <Label>Color</Label>
                    <HexColorPicker
                        style={{ width: "100%" }}
                        color={selected.color ?? "#8884d8"}
                        onChange={handleColorChange}
                    />
                    <Label>Stroke width</Label>
                </div>
            )}
        </div>
    )
}