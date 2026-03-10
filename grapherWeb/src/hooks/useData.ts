import { useContext } from "react";
import { DataContext } from "../context/graph/DataContext";

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within an DataProvider");
    }
    return context;
};