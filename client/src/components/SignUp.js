import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function SignUp({ setUser }) {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/signup", {
            method: 'POST',
            body: ({ firstName, lastName, password, password_confirmation, phone, email, username })
        })
        .then((r) => {
            if (r.ok) {
                console.log("i am in the r.ok file")
                r.json().then((data) => {
                    setUser(data)
                    navigate("/");
                })}
            else {
            r.json().then((err) => setErrors(err.errors));
            }
            })}

    return (
        <div className="homepage-layout">
            <div className="flexBoxRow">
                <div className="flexBoxColumn">
                    {/* <h1 className="title-text">Little Middle Challah</h1> */}
                    <div className="logo-img-container">
                        <div className="logo-image"></div>
                    </div>
                </div>
                <div className="flexBoxColumnSUInfo">
                    <form className="loginForm" onClick={handleSubmit}>
                        <h1 className="SUtitle">Sign Up</h1>
                        <p className="errorMessage">{errors}</p>
                        <div className="SUCouplet">
                            <label className="SU-label">First name:</label>
                            <input className="SU-input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Last name:</label>
                            <input className="loginInput"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Email:</label>
                            <input className="loginInput"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Phone number:</label>
                            <input className="loginInput"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Create a username:</label>
                            <input className="loginInput"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Create a password:</label>
                            <input className="loginInput" type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                id="password" />
                        </div>
                        <div className="SUCouplet">
                            <label className="loginLabel">Confirm password:</label>
                            <input className="loginInput"
                                type="password"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                autoComplete='off'
                                label="Username"
                                name="username" />
                        </div>
                        <div className="centerText">
                            <button className="loginSubmitBtn" type="submit">Sign Up</button>
                        </div>
                        <p className="centerText bottomLogin"><a href="/login">
                            Already a Little Middle Member? Log in!
                        </a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;