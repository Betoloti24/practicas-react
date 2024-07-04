import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PromiseSesionProvider } from "../contexts/PromiseSesionContext";

import ProtectedRouteLogin from "../components/ProtectedRouteLogin";
import ProtectedRoutePages from "../components/ProtectedRoutePages";
import Home from "../pages/Home";
import Login from "../pages/Login";

function ViewRouter() {
    return (
        <Router>
            <PromiseSesionProvider>
                <Routes>
                    <Route path="/" element={
                        <ProtectedRouteLogin>
                            <Login />
                        </ProtectedRouteLogin>
                    } />
                    <Route path="/login" element={
                        <ProtectedRouteLogin>
                            <Login />
                        </ProtectedRouteLogin>
                    } />
                    <Route path="/home" element={
                        <ProtectedRoutePages>
                            <Home />
                        </ProtectedRoutePages>
                    } />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </PromiseSesionProvider>
        </Router>
    );
}

export default ViewRouter