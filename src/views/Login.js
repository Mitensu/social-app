import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = (props) => {
    const [formData, setFormData] = useState({});
    const [loginMessage, setLoginMessage] = useState("");
    const inputUsername = useRef(null);
    const inputPassword = useRef(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://akademia108.pl/api/social-app/user/login', formData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setLoginMessage("Witaj " + res.data.username + "!");
                    props.setUser(res.data)
                    navigate('/');
                }
                inputUsername.current.value = "";
                inputPassword.current.value = "";
            })
            .catch(error => {
                console.log(error)
            });

    }

    return (
        <div className="login">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <input ref={inputUsername} name="username" type='text' onChange={handleInputChange} required="required"></input>
                    <span>Username</span>
                </div>
                <div className="inputBox">
                    <input ref={inputPassword} name="password" type='password' onChange={handleInputChange} required="required"></input>
                    <span>Password</span>
                </div>
                <input type='submit' value='Login'></input>
            </form>
        </div>
    );
}

export default Login;