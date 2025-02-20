import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AuthProvider from "./contexts/app";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}