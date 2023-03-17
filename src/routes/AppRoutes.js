import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

function AppRoutes() {

    return (
        <div className="AppRoutes">
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup/>} />
                123
            </Routes>
            
        </div>
    )
}

export default AppRoutes;