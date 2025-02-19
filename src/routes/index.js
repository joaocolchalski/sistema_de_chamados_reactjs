import { Route, Routes } from "react-router-dom";
import PrivateHome from "./PrivateHome";
import PrivateAuth from "./PrivateAuth";

import SignIn from "../pages/SignIn";
import SignUp from '../pages/SignUp';
import Home from "../pages/Home";
import New from "../pages/New";
import Settings from "../pages/Settings";
import Clients from "../pages/Clients";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PrivateAuth><SignIn /></PrivateAuth>} />
            <Route path="/signup" element={<PrivateAuth><SignUp /></PrivateAuth>} />
            <Route path="/home" element={<PrivateHome><Home /></PrivateHome>} />
            <Route path="/new" element={<PrivateHome><New /></PrivateHome>} />
            <Route path="/settings" element={<PrivateHome><Settings /></PrivateHome>} />
            <Route path="/clients" element={<PrivateHome><Clients /></PrivateHome>} />
        </Routes>
    )
}