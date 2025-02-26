import { useContext } from "react";
import { AppContext } from "../contexts/app";
import { Navigate } from "react-router-dom";

export default function PrivateAuth({ children }) {
    const { signed, loading } = useContext(AppContext)

    if (loading) {
        return (
            <div></div>
        )
    }

    if (signed) {
        return <Navigate to={'/dashboard'} />
    }

    return children
}