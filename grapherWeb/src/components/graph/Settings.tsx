import { useGraph } from "@/hooks/useGraph"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
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

    return (
        <div className="p-2">
            <p>Settings</p>
            <div>
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

            </div>

        </div>
    )

}