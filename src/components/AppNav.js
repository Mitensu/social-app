import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

function AppNav() {

    return(
        <div className="AppNav">
            <AppRoutes />
            <Link to='../views/Home'>Home </Link>
            <Link to='../views/Login'>Login </Link>
            <Link to='../views/Signup'>Signup</Link>
            <p>Loggout</p>
        </div>
    )
}
export default AppNav;