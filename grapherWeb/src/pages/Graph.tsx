import { Grid } from '../components/graph/Grid.tsx';
import { Sheet } from "../components/graph/Sheet.tsx"
import { Settings } from "../components/graph/Settings.tsx"
import { Group, Panel, Separator } from "react-resizable-panels";
import { useGraph } from '../hooks/useGraph.ts';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';


const Graph = () => {
    const { updateGraph, graph } = useGraph()

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateGraph({ title: e.target.value })
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="h-[8%] flex items-center gap-x-3 p-2">
                <Link to="/graphs"><Home size={40} /></Link>
                <div className="flex flex-col w-full justify-start">
                    <input value={graph?.title} onChange={handleTitleChange}
                        className='text-xl'
                        style={{ width: `${(graph?.title?.length || 10) + 2}ch` }} />
                    <ActionsBar />
                </div>

            </div>
            <Group>
                <Panel defaultSize="30%">
                    
                    <Settings />
                </Panel>
                <Separator />

                <Panel>
                    <Group className="w-full h-[92%]" orientation='vertical'>
                        <Panel defaultSize="50%">
                            <Sheet />
                        </Panel>
                        <Separator />
                        <Panel className="">
                            <Grid />
                        </Panel>
                    </Group>
                </Panel>

            </Group>

        </div>


    )

}
const ActionsBar = () => {
    return (
        <div className="flex gap-x-3">
            <button className="text-sm">File</button>
            <button className="text-sm">Edit</button>
            <button className="text-sm">View</button>
            <button className="text-sm">Insert</button>
            <button className="text-sm">Format</button>
            <button className="text-sm">Tools</button>
        </div>
    )
}



export default Graph; 