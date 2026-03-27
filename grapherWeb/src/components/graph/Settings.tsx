import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Series } from "@/components/settings/Series"
import { Styling } from "@/components/settings/Styling"
import type { ReactElement } from "react";
import { AxisSettings } from "../settings/AxisSettings";
import { Analysis } from "../settings/Analysis";

interface items {
    value: string;
    trigger: string;
    content: ReactElement
}

export const Settings = () => {
    const items: items[] = [
        {
            value: "series",
            trigger: "Series",
            content: (
                <Series />
            )
        },
        {
            value: "styling",
            trigger: "Styles",
            content: (
                <Styling />
            )
        },
        {
            value: "axis",
            trigger: "Axis",
            content: (
                <AxisSettings />
            )
        },
        {
            value: "analysis",
            trigger: "Analysis",
            content: (
                <Analysis />
            )
        },
        {
            value: "legend",
            trigger: "Legend",
            content: (
                <div>

                </div>
            )
        }
    ]

    return (
        <Accordion multiple className="w-full p-4" defaultValue={[""]}>
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )

}