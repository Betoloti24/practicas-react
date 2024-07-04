import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GeneralProvider } from "../contexts/GeneralContext";

import ProtectedRouterLogin from "./ProtectedRouterLogin";
import ProtectedRouterPages from "./ProtectedRouterPages";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Productos from "../pages/Products";

function ViewRouter() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRouterLogin>
              <Login />
            </ProtectedRouterLogin>
          } />
          <Route path="/login" element={
            <ProtectedRouterLogin>
              <Login />
            </ProtectedRouterLogin>
          } />
          <Route path="/home" element={
            <ProtectedRouterPages>
              <Home />
            </ProtectedRouterPages>
          } />
          <Route path="/servicios" element={
            <ProtectedRouterPages>
              <Services />
            </ProtectedRouterPages>
          } />
          <Route path="/productos" element={
            <ProtectedRouterPages>
              <Productos />
            </ProtectedRouterPages>
          } />
          <Route path="*" element={
            <ProtectedRouterPages>
              <Home />
            </ProtectedRouterPages>
          } />
        </Routes>
      </Router>
  )
}

export default ViewRouter