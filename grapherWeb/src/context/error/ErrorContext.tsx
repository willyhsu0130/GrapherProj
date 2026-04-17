import { createContext } from "react";
import type { ErrorContextType } from "@/models/context/errorContextType";

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

