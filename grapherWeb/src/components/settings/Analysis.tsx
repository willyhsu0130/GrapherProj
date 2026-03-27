import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { useGraph } from "@/hooks/useGraph"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Field, FieldGroup, FieldLabel } from "../ui/field"
import {
    Combobox, ComboboxContent, ComboboxEmpty,
    ComboboxInput, ComboboxItem, ComboboxList,
} from "@/components/ui/combobox"
import type { Series, Trendline } from "@/models/API/APITypes"
import { ItemContent, ItemTitle } from "../ui/item"

export const Analysis = () => {

    const items = [
        {
            trigger: "Trendlines",
            value: "",
            content: (
                <Trendline />
            )
        }
    ]

    return (
        <div className="pl-2 w-full flex flex-col gap-y-4" defaultValue={["title"]}>
            {items.map((item) => (
                <div key={item.value} className="flex flex-col gap-y-2 w-full">
                    <Label>{item.trigger}</Label>
                    {item.content}
                </div>
            ))}
        </div>
    )

}

const Trendline = () => {
    const { graph, updateGraph } = useGraph()
    const [lineTitle, setLineTitle] = useState("");
    const trendlines = graph?.trendlines ?? [];

    const handleAddTrendline = () => {
        setLineTitle("")
        updateGraph({
            trendlines: [...trendlines, {
                type: "linear" as const,
                seriesId: "",
                title: { content: lineTitle },
                color: ""
            }]
        });
    }

    const handleRemoveSeries = (index: number) => {
        updateGraph({
            trendlines: trendlines.filter((_, i) => i !== index)
        });
    };

    return (
        <div>
            <div className="flex">
                <Input placeholder="Trendline name" onChange={(e) => setLineTitle(e.target.value)} value={lineTitle} />
                <Button onClick={handleAddTrendline}>
                    Add Trendline
                </Button>
            </div>

            <Accordion multiple className="pl-2 w-full" defaultValue={[""]}>
                {trendlines.map((item, index) => (
                    <AccordionItem key={index} value={index}>
                        <AccordionTrigger>{`Trendlines ${index + 1} `}</AccordionTrigger>
                        <AccordionContent>
                            <TrendlineItem
                                key={index}
                                item={item}
                                index={index}
                                onRemove={() => handleRemoveSeries(index)}
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )

}

const TrendlineItem = ({ item, index, onRemove }: { item: Trendline, index: number, onRemove: () => void }) => {
    const { updateGraph, graph } = useGraph();
    const series = graph?.series ?? [];
    const [selectedSeries, setSelectedSeries] = useState<Series | null>(
        series.find(s => s.id === item?.seriesId) ?? null
    );

    const updateTrendline = (fields: Partial<Trendline>) => {
        const updated = (graph?.trendlines ?? []).map((s, i) =>
            i === index ? { ...s, ...fields } as typeof s : s
        );
        updateGraph({ trendlines: updated });
    };

    const handleChange = (field: 'gradient' | 'yIntercept') =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            updateTrendline({ [field]: isNaN(value) ? undefined : value });
        };

    const handleSeriesIdChange = (val: Series) => {
        updateTrendline({ seriesId: val.id });
    };

    const handleRecalculate = () => {
        updateTrendline({ gradient: undefined, yIntercept: undefined });
    };
    return (
        <FieldGroup className="border border-black p-3">
            <Field>
                <FieldLabel>Series</FieldLabel>
                <Combobox
                    items={series}
                    itemToStringValue={(item: Series) => item.title?.content ?? ""}
                    value={selectedSeries}
                    onValueChange={(val) => {
                        setSelectedSeries(val as Series);
                        handleSeriesIdChange(val as Series);
                    }}
                    autoHighlight
                    autoComplete=""
                >
                    <ComboboxInput placeholder="Select Series" value={selectedSeries?.title?.content ?? ""} />
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
            </Field>
            {selectedSeries && item?.type === "linear" &&
                <div className="flex-col gap-y-3">
                    <div className="flex">
                        <Field>
                            <FieldLabel>Gradient</FieldLabel>
                            <Input type="number" step="0.1" onChange={handleChange('gradient')} value={item.gradient ?? ""} />
                        </Field>
                        <Field>
                            <FieldLabel>Y-intercept</FieldLabel>
                            <Input type="number" step="0.1" onChange={handleChange('yIntercept')} value={item.yIntercept ?? ""} />
                        </Field>
                    </div>
                    <div>
                        <Field>
                            <Button onClick={handleRecalculate}>Recalculate</Button>
                        </Field>
                    </div>

                </div>
            }
            {item?.type === "polynomial" && <p>Polynomial not yet supported</p>}
            <Button variant="ghost" size="sm" onClick={onRemove}>Remove Trendline</Button>
        </FieldGroup>
    );
};