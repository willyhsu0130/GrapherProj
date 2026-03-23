import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Series } from "@/components/settings/Series"
import { Styling } from "@/components/settings/Styling"


export const Settings = () => {
    const items = [
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