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
import { Field, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"

import { trendlineLineTypes } from "@/constants/trendlineLineTypes"

type SelectableItem =
    | (Series & { _type: "series" })
    | (NonNullable<Trendline> & { _type: "trendline" });

export const Styling = () => {
    const { graph, updateGraph } = useGraph()
    const series = graph?.series;
    const trendlines = graph?.trendlines;

    const combined: SelectableItem[] = [
        ...(series ?? []).map(s => ({ ...s, _type: "series" as const })),
        ...(trendlines ?? []).flatMap(t => t ? [{ ...t, _type: "trendline" as const }] : []),
    ];

    const [selected, setSelected] = useState<SelectableItem | null>(null);


    type FieldConfig =
        | { field: 'lineType'; type: 'string' }
        | { field: 'width'; type: 'number' }
        | { field: 'color'; type: 'color' }

    const parseValue = (raw: string, type: FieldConfig['type']) => {
        if (type === 'number') return Number(raw);
        return raw;
    };

    const handleChange = ({ field, type }: FieldConfig) =>
        (value: string) => {
            if (!selected) return;
            const parsed = parseValue(value, type);

            setSelected({ ...selected, [field]: parsed });
            
            if (selected._type === "series") {
                updateGraph({
                    series: series?.map(s =>
                        s.id === selected.id ? { ...s, [field]: parsed } : s
                    )
                });
            } else if (selected._type === "trendline") {
                updateGraph({
                    trendlines: (trendlines ?? []).map(t => {
                        if (!t) return t;
                        return t.id === selected.id ? { ...t, [field]: parsed } : t;
                    })
                });
            }
        };


    return (
        <div className="flex flex-col gap-4">
            <Combobox
                items={combined}
                itemToStringValue={(item: Series) => item.title?.content ?? ""}
                value={selected?.title ?? null}
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
                        onChange={handleChange({ field: 'color', type: 'color' })}
                    />
                    <div className="flex">
                        <Field>
                            <FieldLabel>Stroke width</FieldLabel>
                            <Input
                                type="number"
                                onChange={e => handleChange({ field: 'width', type: 'number' })(e.target.value)}
                                value={selected?.width ?? ""}
                            />
                        </Field>
                        {selected._type === "trendline" && (
                            <Field>
                                <FieldLabel>Line Type</FieldLabel>
                                <Combobox
                                    autoHighlight
                                    autoComplete=""
                                    items={trendlineLineTypes}
                                    itemToStringValue={(item: string) => item}
                                    value={trendlineLineTypes.find(t => t === selected.lineType) ?? null}

                                    onValueChange={(val) => handleChange({ field: 'lineType', type: 'string' })(val as string)}
                                >
                                    <ComboboxInput placeholder="Select line type" value={selected.lineType} />
                                    <ComboboxContent>
                                        <ComboboxEmpty>No types found.</ComboboxEmpty>
                                        <ComboboxList>
                                            {(item: string) => (
                                                <ComboboxItem key={item} value={item} title={item}>
                                                    <ItemContent>
                                                        <ItemTitle className="whitespace-nowrap">
                                                            {item}
                                                        </ItemTitle>
                                                    </ItemContent>
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                                {/* <Input
                                    type="text"
                                    onChange={e => handleChange({ field: 'lineType', type: 'string' })(e.target.value)}
                                    value={selected.lineType}
                                /> */}
                            </Field>
                        )}

                    </div>



                </div>
            )
            }
        </div >
    )
}