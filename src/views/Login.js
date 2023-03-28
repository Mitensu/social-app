import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
    const [formData, setFormData] = useState({});
    const [loginMessage, setLoginMessage] = useState("");

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
                localStorage.setItem("user", JSON.stringify(res.data))
                setLoginMessage("Witaj " + res.data.username + "!")
                props.setUser(localStorage.getItem("user"))
            }
            // e.target.submit();
        })
        .catch(error => {
            console.log(error)
        });
        
    }

    return(
        <div className="Login">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name="username" type='text' onChange={handleInputChange}></input>
            <label>Password</label>
            <input name="password" type='password' onChange={handleInputChange}></input>
            <input type='submit' value='Login'></input>
            </form>
            {loginMessage}
        </div>
    );
}

export default Login;