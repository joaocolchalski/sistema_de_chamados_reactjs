import { Route, Routes } from "react-router-dom";
import PrivateDashboard from "./PrivateDashboard";
import PrivateAuth from "./PrivateAuth";

import SignIn from "../pages/SignIn";
import SignUp from '../pages/SignUp';
import Dashboard from "../pages/Dashboard";
import New from "../pages/New";
import Settings from "../pages/Settings";
import Clients from "../pages/Clients";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PrivateAuth><SignIn /></PrivateAuth>} />
            <Route path="/signup" element={<PrivateAuth><SignUp /></PrivateAuth>} />
            <Route path="/dashboard" element={<PrivateDashboard><Dashboard /></PrivateDashboard>} />
            <Route path="/new/:id?" element={<PrivateDashboard><New /></PrivateDashboard>} />
            <Route path="/settings" element={<PrivateDashboard><Settings /></PrivateDashboard>} />
            <Route path="/clients" element={<PrivateDashboard><Clients /></PrivateDashboard>} />
        </Routes>
    )
}