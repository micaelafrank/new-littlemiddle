import React, { useState } from "react";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                    <form className="loginForm">
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
                            <button className="loginSubmitBtn" type="submit">Submit Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;