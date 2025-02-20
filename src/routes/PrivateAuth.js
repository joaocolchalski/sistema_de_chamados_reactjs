import { useContext } from "react";
import { AuthContext } from "../contexts/app";
import { Navigate } from "react-router-dom";

export default function PrivateAuth({ children }) {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div></div>
        )
    }

    if (signed) {
        return <Navigate to={'/home'} />
    }

    return children
}