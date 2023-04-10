import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        //setIsLoading(true);
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            console.log("set is loading false")
            if (r.ok) {
                console.log("i am in the r.ok file")
                r.json().then((user) => {
                    onLogin(user)
                    navigate("/");
                });
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setError(err.error));
                console.log("my error: ", error.messages)
            }
        });
    }
    console.log(error)

    return (
        <div className="homepage-layout">
            <div className="flexBoxRow">
                <div className="flexBoxColumn">
                    {/* <h1 className="title-text">Little Middle Challah</h1> */}
                    <div className="logo-img-container">
                        <div className="logo-image"></div>
                    </div>
                </div>
                <div className="flexBoxColumnLoginInfo">
                    <h1 className="loginTitle">Login</h1>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <p className="errorMessage">{error}</p>
                        <div className="loginCouplet">
                            <label className="loginLabel">Username:</label>
                            <input className="loginInput"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            autoComplete='off'
                            label="Username"
                            name="username"/>
                        </div>
                        <div className="loginCouplet">
                            <label className="loginLabel">Password:</label>
                            <input className="loginInput" type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            id="password"/>
                        </div>
                        <div className="centerText paddingT20">
                            <button className="loginSubmitBtn" type="submit">Sign in</button>
                        </div>
                        <p className="centerText bottomLogin"><a href="/signup">
                            Don't have an account? Sign up!
                        </a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;