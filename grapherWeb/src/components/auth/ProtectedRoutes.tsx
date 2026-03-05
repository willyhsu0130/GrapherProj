// src/components/ProtectedRoute.tsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import type { ReactNode } from "react";


export const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const { token } = useAuth();
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }

    })
    return children
}
