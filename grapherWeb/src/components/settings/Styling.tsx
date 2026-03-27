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

export const Styling = () => {
    const { graph, updateGraph } = useGraph()
    const series = graph?.series ?? []
    const [selectedSeries, setSelectedSeries] = useState<Series | null>(null)

    const handleColorChange = (color: string) => {
        const updated = series.map(s =>
            s.title === selectedSeries?.title
                ? { ...s, color }
                : s
        )
        updateGraph({ series: updated })
    }

    return (
        <div className="flex flex-col gap-4">
            <Combobox
                items={series}
                itemToStringValue={(item: Series) => item.title?.content ?? ""}
                value={selectedSeries}
                onValueChange={(val) => setSelectedSeries(val as Series)}
                autoHighlight
                autoComplete=""
            >
                <ComboboxInput placeholder="Select a series to modify" />
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

            {selectedSeries && (
                <div className="flex flex-col gap-2">
                    <Label>Color</Label>
                    <HexColorPicker
                        style={{ width: "100%" }}
                        color={selectedSeries.color ?? "#8884d8"}
                        onChange={handleColorChange}
                    />
                </div>
            )}
        </div>
    )
}