import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Navigate } from "react-router-dom";

export default function PrivateHome({ children }) {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div></div>
        )
    }

    if (!signed) {
        return <Navigate to={'/'} />
    }

    return children
}