import { useGraph } from "@/hooks/useGraph"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input";


export const Settings = () => {
    const { updateGraph, graph } = useGraph()

    const handleXSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!graph) return null
        updateGraph({ xAxis: { ...graph?.xAxis, col: e.target.value } })
    }

    const handleYSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!graph) return null
        updateGraph({ yAxis: { ...graph?.yAxis, col: e.target.value } })
    }

    const items = [
        {
            value: "series",
            trigger: "Adjust Seires",
            content: (
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Choose X-axis</FieldLabel>
                            <Input placeholder="X series" onChange={handleXSeriesChange} value={graph?.xAxis?.col ?? ""} />
                        </Field>

                        <Field>
                            <FieldLabel>Choose Y-axis</FieldLabel>
                            <Input placeholder="Y series" onChange={handleYSeriesChange} value={graph?.yAxis?.col ?? ""} />

                        </Field>
                    </FieldGroup>

            )
        },
        {

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