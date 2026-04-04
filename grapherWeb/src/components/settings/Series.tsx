import type { Series as SeriesType } from "@/models/API/APITypes"
import { useGraph } from "@/hooks/useGraph"
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
export const Series = () => {
    const { graph, updateGraph } = useGraph();
    const series = graph?.series ?? [];
    const [inputTitle, setInputTitle] = useState("")

    const handleAddSeries = () => {
        setInputTitle("")
        updateGraph({
            
            series: [...series, {
                id: crypto.randomUUID(),
                xAxis: { col: "" },
                yAxis: { col: "" },
                title: {
                    content: inputTitle,
                },
                color: ""
            }]
        });
    };

    const handleRemoveSeries = (index: number) => {
        updateGraph({
            series: series.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex">
                <Input placeholder="Series Title" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
                <Button onClick={handleAddSeries}>
                    Add Series
                </Button>
            </div>

            <Accordion multiple className="pl-2 w-full" defaultValue={[""]}>
                {series.map((item, index) => (
                    <AccordionItem key={index} value={index}>
                        <AccordionTrigger>{`Series ${index + 1} `}</AccordionTrigger>
                        <AccordionContent>
                            <SeriesItem
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
    );
};

const SeriesItem = ({ item, index, onRemove }: { item: SeriesType, index: number, onRemove: () => void }) => {
    const { updateGraph, graph } = useGraph();

    const handleChange = (field: 'xAxis' | 'yAxis' | 'title') =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const updated = graph!.series?.map((s, i) =>
                i === index
                    ? field === 'title'
                        ? {
                            ...s, title: {
                                content: e.target.value
                            }

                        }
                        : { ...s, [field]: { ...s[field as 'xAxis' | 'yAxis'], col: e.target.value } }
                    : s
            );
            console.log("updated series", updated)
            updateGraph({ series: updated });
        };

    return (
        <FieldGroup className="border border-black p-3">
            <Field>
                <FieldLabel>Title</FieldLabel>
                <Input onChange={handleChange('title')} value={item.title?.content ?? ""} />
            </Field>
            <div className="flex">
                <Field>
                    <FieldLabel>X-axis</FieldLabel>
                    <Input onChange={handleChange('xAxis')} value={item?.xAxis?.col ?? ""} />
                </Field>
                <Field>
                    <FieldLabel>Y-axis</FieldLabel>
                    <Input onChange={handleChange('yAxis')} value={item?.yAxis?.col ?? ""} />
                </Field>
            </div>
            <Button variant="ghost" size="sm" onClick={onRemove}>Remove Series</Button>
        </FieldGroup>
    );
};