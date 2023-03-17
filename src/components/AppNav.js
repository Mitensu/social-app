import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

function AppNav() {

    return(
        <div className="AppNav"> 
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to='signup'>Signup</Link>
            <p>Loggout</p>
            <AppRoutes />
        </div>
    )
}
export default AppNav;