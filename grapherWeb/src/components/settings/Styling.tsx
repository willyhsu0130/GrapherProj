import { useState } from "react"
import { useGraph } from "@/hooks/useGraph"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import type { Series } from "@/models/graph/Graph"

export const Styling = () => {
    const { graph } = useGraph()
    const series = graph?.series ?? []
    const [selectedSeries, setSelectedSeries] = useState<Series | null>(null)
    console.log(selectedSeries);
;
    return (
        <div>
            <Combobox
                items={series}
                itemToStringValue={(item: Series) => item.title ?? ""}
                value={selectedSeries}
                onValueChange={(val) => setSelectedSeries(val as Series)}
            >
                <ComboboxInput placeholder="Select a series to modify" />
                <ComboboxContent>
                    <ComboboxEmpty>No series found.</ComboboxEmpty>
                    <ComboboxList>
                        {(item: Series) => (
                            <ComboboxItem key={item.title} value={item.title}>
                                {item.title}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

            {selectedSeries && (
                <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                        Editing: {selectedSeries.title}
                    </p>
                </div>
            )}
        </div>
    )
}

const COl