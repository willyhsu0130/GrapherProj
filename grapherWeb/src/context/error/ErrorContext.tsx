import { createContext } from "react";
import type { ErrorContextType } from "@/models/context/ErrorContextType";

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

