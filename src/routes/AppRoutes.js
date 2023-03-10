import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

function AppRoutes() {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="../views/Home" element={<Home/>} />
                <Route path="../views/Login" element={<Login/>} />
                <Route path="../views/Signup" element={<Signup/>} />
            </Routes>
        </div>
    )
}

export default AppRoutes;