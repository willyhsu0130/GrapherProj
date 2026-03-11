import { createContext } from "react";
import type { GraphContextType } from "../../models/graph/GraphContextType.ts";


export const GraphContext = createContext<GraphContextType | undefined>(undefined);

