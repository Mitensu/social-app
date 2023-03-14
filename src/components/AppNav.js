import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

function AppNav() {

    return(
        <div className="AppNav">
            <AppRoutes />
            <Link to='home'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to='signup'>Signup</Link>
            <p>Loggout</p>
        </div>
    )
}
export default AppNav;