import { useGraph } from "../../hooks/useGraph"

export const Settings = () => {
    const {updateGraph, graph} = useGraph()
    
    return (
        <div className="p-2">
            <p>Settings</p>
            <div>
                <p>Choose X-axis</p>
                
                <p>Choose Y-axis</p>
            </div>

        </div>
    )

}