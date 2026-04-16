import { useState } from "react"
import { useGraph } from "@/hooks/useGraph"
import { HexColorPicker } from "react-colorful"
import {
    Combobox, ComboboxContent, ComboboxEmpty,
    ComboboxInput, ComboboxItem, ComboboxList,
} from "@/components/ui/combobox"

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {
    ItemContent,
    ItemTitle,
} from "@/components/ui/item"

import { Label } from "@/components/ui/label"
import type { Series } from "@/models/API/APITypes"
import type { Trendline } from "@/models/API/APITypes"
import { Field, FieldLabel, FieldSet, FieldGroup } from "../ui/field"
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

            // Change locally
            setSelected({ ...selected, [field]: parsed });

            // Change in server

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

    const initErrorBar = () => {
        if (!selected || selected._type !== "series") return;

        const newErrorBar = {
            color: selected.color ?? "#ff0000",
            width: 3,
            lineType: "Dashed" as const,
            errorBarType: "CONSTANT" as const
        };

        // Update Local UI
        setSelected({ ...selected, errorBar: newErrorBar });

        // Update Global State
        updateGraph({
            series: series?.map(s =>
                s.id === selected.id ? { ...s, errorBar: newErrorBar } : s
            )
        });
    };

    const removeErrorBar = () => {
        if (!selected || selected._type !== "series") return;

        setSelected({ ...selected, errorBar: null });

        updateGraph({
            series: series?.map(s =>
                s.id === selected.id ? { ...s, errorBar: null } : s
            )
        });
    };

    // const handleErrorBarChange = (subField: string, type: FieldConfig['type']) => (value: string) => {
    //     console.log("handleErrorBarChange called")
    //     if (!selected || selected._type !== "series") return;

    //     const parsedValue = parseValue(value, type);

    //     // 1. Create the new errorBar object by merging
    //     const updatedErrorBar = {
    //         // Default values if errorBar was null, otherwise spread existing
    //         ...(selected.errorBar ?? {
    //             errorBarType: "CONSTANT",
    //             width: 1,
    //             color: "black",
    //             lineType: "Solid",
    //         }),
    //         [subField]: parsedValue
    //     };

    //     // 2. Update Locally
    //     setSelected({
    //         ...selected,
    //         errorBar: updatedErrorBar
    //     });

    //     // 3. Update Global Graph (Server sync)
    //     updateGraph({
    //         series: series?.map(s =>
    //             s.id === selected.id ? { ...s, errorBar: updatedErrorBar } : s
    //         )
    //     });
    // };
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

                <FieldSet className="flex">
                    <Label>Color</Label>
                    <HexColorPicker
                        style={{ width: "100%" }}
                        color={selected.color ?? "#8884d8"}
                        onChange={handleChange({ field: 'color', type: 'color' })}
                    />
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Stroke width</FieldLabel>
                            <Input
                                min={1}
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
                            </Field>
                        )}
                        {
                            selected._type === "series" && (
                                <>
                                    <Field className="w-full">
                                        <FieldLabel>Error Bars</FieldLabel>
                                        <Field className="w-full">
                                            <FieldLabel>Error Bars</FieldLabel>
                                            <ToggleGroup
                                                variant="outline"
                                                value={selected.errorBar ? ["yes"] : ["no"]}
                                                onValueChange={(val) => {
                                                    // Because val is an array, we check if "yes" or "no" is inside it
                                                    if (val.includes("yes")) {
                                                        initErrorBar();
                                                    } else {
                                                        // If they click "no", or unclick "yes", we remove them
                                                        removeErrorBar();
                                                    }
                                                }}
                                            >
                                                <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
                                                <ToggleGroupItem value="no">No</ToggleGroupItem>
                                            </ToggleGroup>
                                        </Field>
                                    </Field>
                                    {
                                        selected.errorBar && (
                                            <div>
                                                <p>Error Bars Settings</p>
                                            </div>

                                        )
                                    }
                                    <Field>

                                    </Field>
                                </>
                            )
                        }
                    </FieldGroup>
                </FieldSet>

            )
            }
        </div >
    )
}