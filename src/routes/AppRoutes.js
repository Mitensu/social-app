import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

const AppRoutes = (props) => {

    return (
        <div className="AppRoutes">
            
            <Routes>
                <Route path="/" element={<Home user={props.user}/>} />
                <Route path="login" element={<Login setUser={props.setUser}/>} />
                <Route path="signup" element={<Signup user={props.user}/>} />
            </Routes>
            
        </div>
    )
}

export default AppRoutes;