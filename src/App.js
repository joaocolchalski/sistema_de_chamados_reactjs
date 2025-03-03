import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AppProvider from "./contexts/app";
import { ToastContainer, Bounce } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}