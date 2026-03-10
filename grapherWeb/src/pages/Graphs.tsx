import { Thumbnail } from "../components/graphs/Thumbnail";
import { Plus } from "lucide-react";
import { createGraph, fetchAllGraphs } from "../services/fetchers";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Graph } from "../models/Graph";


const Dashboard = () => {
    const [graphs, setGraphs] = useState<Graph[] | undefined>([])
    const { username, token } = useAuth()
    const navigator = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateGraph = async () => {
        if (isLoading) return;
        try {
            setIsLoading(true);
            if (!username) throw new Error("No token")

            const res = await createGraph()
            if (!res.success) return

            const graphId = res?.data?.id
            if (!graphId) throw new Error("No graphId found")
            navigator(`${graphId}`)

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetchAllGraphs()
            console.log(res)
            if (!res.success) return

            const graphs = res?.data;
            console.log(graphs)
            if (graphs) setGraphs(graphs)

        }
        fetcher();
    }, [token])

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="h-[10%] flex justify-start p-2">
                <div className="w-[30%]">
                    <p className="text-2xl">Welcome Back!</p>
                    <p className="text-xl">My Graphs</p>
                </div>
                <div className="w-[70%] flex items-center">
                    <input className="w-full rounded-full border border-black"/>
                </div>

            </div>
            <div className="h-[90%] p-2 grid grid-cols-4 gap-2 grid-rows-3">
                <button className="flex justify-center items-center border border-black hover:bg-amber-100"
                    onClick={handleCreateGraph}>
                    <Plus />
                </button>
                {graphs?.map((item, id) => (
                    <Thumbnail key={id} graphId={item.id} title={item.title} />
                ))
                }
            </div>
        </div>
    )

}
export default Dashboard