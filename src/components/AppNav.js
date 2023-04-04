import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import './AppNav.css';

const AppNav = (props) => {

    return (
        <div className="AppNav">
            <Link to='/'>Home</Link>
            {!props.user &&
                <Link to='login'>Login</Link>
            }
            {!props.user &&
                <Link to='signup'>Signup</Link>
            }
            {props.user &&
                <Link to='/' onClick={props.logout}>Logout</Link>
            }
        </div>
    )
}
export default AppNav;