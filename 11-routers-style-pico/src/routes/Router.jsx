import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Productos from "../pages/Products";

function ViewRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/productos" element={<Productos/>} />
      </Routes>
    </Router>
  )
}

export default ViewRouter