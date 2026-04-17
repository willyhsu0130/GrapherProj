import { Thumbnail } from "../components/graphs/Thumbnail";
import { Plus } from "lucide-react";
import { createGraph, fetchAllGraphs } from "../services/fetchers";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import type { Graph } from "../models/graph/Graph";

const Graphs = () => {
    const [graphs, setGraphs] = useState<Graph[] | undefined>(undefined);

    const { username, token } = useAuth();
    const navigator = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [search, setSearch] = useState("");

    const handleRefresh = (newList: Graph[] | undefined) => {
        setGraphs(newList);
    };

    const handleCreateGraph = async () => {
        if (isLoading) return;
        try {
            setIsLoading(true);
            if (!username) throw new Error("No token");
            const res = await createGraph();
            if (!res.success) {
                console.log(res)
                alert(res.message); return;
            }
            const graphId = res?.data?.id;
            if (!graphId) throw new Error("No graphId found");
            navigator(`${graphId}`);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetcher = async () => {
            setIsFetching(true);
            const res = await fetchAllGraphs();
            if (!res.success) { console.log(res); }
            const graphs = res?.data;
            if (graphs) setGraphs(graphs);
            setIsFetching(false);
        };
        fetcher();
    }, [token]);

    const filtered = graphs?.filter(g =>
        (g.title || "").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className="min-h-screen bg-background text-foreground flex flex-col"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Header */}
            <div className="flex justify-between items-center px-12 py-6">
                <div>
                    <p className="text-2xl font-semibold tracking-tight">Welcome back.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">My Graphs</p>
                </div>
                <div className="flex items-center gap-3">
                    <Input
                        placeholder="Search graphs..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-72 h-9 text-xs rounded-none"
                    />
                    <Button
                        onClick={handleCreateGraph}
                        disabled={isLoading}
                        variant="outline"
                        size="sm"
                        className="rounded-none text-xs gap-2"
                    >
                        <Plus size={14} />
                        {isLoading ? "Creating..." : "New graph"}
                    </Button>
                </div>
            </div>

            <Separator />

            {/* Grid */}
            <div className="flex-1 p-12">
                <div
                    className="border border-border"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gridAutoRows: "200px",
                    }}
                >
                    {/* Skeletons while fetching */}
                    {isFetching && Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="border-r border-b border-border p-3 flex flex-col gap-2"
                        >
                            <Skeleton className="flex-1 w-full rounded-none" />
                            <Skeleton className="h-4 w-2/3 rounded-none" />
                        </div>
                    ))}

                    {/* Graphs */}
                    {!isFetching && filtered?.map((item, id) => (
                        <div
                            key={id}
                            className="border-r border-b border-border overflow-hidden"
                        >
                            <Thumbnail
                                graphId={item.id}
                                title={item.title || "Untitled"}
                                png={item.snapshot || undefined}
                                onDeleteSuccess={handleRefresh}
                            />
                        </div>
                    ))}

                    {/* Empty state */}
                    {!isFetching && filtered?.length === 0 && (
                        <div className="border-r border-b border-border col-span-4 flex items-center justify-center text-muted-foreground text-xs">
                            {search ? "No graphs match your search." : "No graphs yet. Create one to get started."}
                        </div>
                    )}
                </div>
            </div>

            <Separator />

            {/* Footer */}
            <div className="px-12 py-4 flex justify-between items-center">
                <span className="text-sm font-semibold tracking-tight">
                    grapher<span className="text-muted-foreground">.</span>
                </span>
                <Badge variant="secondary" className="text-xs rounded-none font-normal">
                    {graphs?.length ?? 0} graphs
                </Badge>
            </div>
        </div>
    );
};

export default Graphs;