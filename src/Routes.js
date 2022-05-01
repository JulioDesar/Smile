/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import AdminCliente from "./Pages/AdminCliente";
import AdminConsultas from "./Pages/AdminConsultas";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/adminclientes" element={<AdminCliente />} />
                <Route
                    path="/user/adminconsultas"
                    element={<AdminConsultas />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
