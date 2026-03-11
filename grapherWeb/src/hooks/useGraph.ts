import { useContext } from "react";
import { GraphContext } from "../context/graph/GraphContext";

export const useGraph = () => {
    const context = useContext(GraphContext);
    if (!context) {
        throw new Error("useData must be used within an GraphProvider");
    }
    return context;
};