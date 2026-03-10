import { Grid } from '../components/graph/Grid.tsx';
import { Sheet } from "../components/graph/Sheet.tsx"
import { Group, Panel, Separator } from "react-resizable-panels";
import { useEffect, useState } from 'react';
import { fetchGraphById } from '../services/fetchers.ts';
import { useParams } from 'react-router-dom';

const Graph = () => {
    const [title, setTitle] = useState<string>();
    const { graphId } = useParams();

    useEffect(() => {
        const fetcher = async () => {
            if (!graphId) return
 
            const res = await fetchGraphById({graphId: parseInt(graphId)})
            if(!res.success || !res.data) return
            const data = res.data;
            setTitle(data.title)
            console.log(res)
        }
        fetcher()
    }, [graphId])

    return (
        <div>
            <p>{title}</p>
            <Group className="w-full h-full flex">
                <Panel defaultSize="50%" className="w-1/2">
                    <Sheet />
                </Panel>
                <Separator />
                <Panel className="w-1/2">
                    <Grid />
                </Panel>
            </Group>
        </div>


    )

}

export default Graph; 