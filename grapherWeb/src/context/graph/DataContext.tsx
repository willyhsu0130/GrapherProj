import { createContext } from "react";
import type { DataContextType } from "../../models/data/data";


export const DataContext = createContext<DataContextType | undefined>(undefined);

