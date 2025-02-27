import { useContext } from "react";
import { AppContext } from "../contexts/app";
import { Navigate } from "react-router-dom";
import SpinnerLoading from "../components/Spinner";

export default function PrivateDashboard({ children }) {
    const { signed, loadingVerifySigned } = useContext(AppContext)

    if (loadingVerifySigned) {
        return (
            <SpinnerLoading />
        )
    }

    if (!signed) {
        return <Navigate to={'/'} />
    }

    return children
}