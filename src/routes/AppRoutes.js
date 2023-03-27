import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

const AppRoutes = (props) => {

    return (
        <div className="AppRoutes">
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login user={props.user}/>} />
                <Route path="signup" element={<Signup/>} />
            </Routes>
            
        </div>
    )
}

export default AppRoutes;