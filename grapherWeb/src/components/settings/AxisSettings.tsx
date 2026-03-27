import { useGraph } from "@/hooks/useGraph"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { HexColorPicker } from "react-colorful"


export const AxisSettings = () => {
    return (
        <div className="flex flex-col">

            <Tabs defaultValue="xAxis" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="xAxis">X-axis</TabsTrigger>
                    <TabsTrigger value="yAxis">Y-axis</TabsTrigger>
                </TabsList>
                <TabsContent value="xAxis">
                    <AxisItems axis="xAxis" />
                </TabsContent>
                <TabsContent value="yAxis">
                    <AxisItems axis="yAxis" />
                </TabsContent>
            </Tabs>

        </div>
    )
}

interface StyleItemsProps {
    axis: "xAxis" | "yAxis"
}

const AxisItems = ({ axis }: StyleItemsProps) => {
    const { graph, updateGraph } = useGraph()

    const handleTitleChange = (field: "content" | "color") =>
        (value: string) => {
            const update = {
                [axis]: {
                    ...(graph?.[axis] ?? {}),
                    title: {
                        [field]: value
                    }
                }
            }
            console.log("updating:", update)
            updateGraph(update)
        }
    const items = [
        {
            trigger: "Title",
            value: "title",
            content: (

                <Input
                    placeholder="title"
                    onChange={(e) => handleTitleChange("content")(e.target.value)}
                    value={graph?.[axis]?.title?.content ?? ""}
                />
            )
        },
        {
            trigger: "Title Color",
            value: "titleColor",
            content: (
                <HexColorPicker
                    className="w-full"
                    style={{ width: '100%' }}
                    color={graph?.[axis]?.color ?? "#8884d8"}
                    onChange={handleTitleChange("color")}
                />
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