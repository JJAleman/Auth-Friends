import React from "react";
import axios from "axios";
import { useState } from "react"


const Login = () => {

    const [ creds, setCreds] = useState({username: "", password: ""});

    const handleChange = e => {
        setCreds({...creds, [e.target.name]: e.target.value});
    };

    const login = e => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            console.log("You're logged in!", res);
            localStorage.setItem("token", res.data.payload);
            creds.history.push("/protected");
        })
        .catch(err => console.log("Oops something went wrong!", err))
    };

    return (
        <div>
            <form onSubmit={login}>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={creds.username}
                onChange={handleChange}
                />
                <input
                type="text"
                name="password"
                placeholder="password"
                value={creds.password}
                onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
};


export default Login;