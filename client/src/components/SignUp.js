import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function SignUp({ onSignUp, user }) {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/signup", {
            method: 'POST',
            body: ({ 
                firstName, lastName, password, password_confirmation, phone, email, username })
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((data) => onSignUp(data));
                setIsLoading(!isLoading);
                navigate("/")
                setUsername("")
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
        });
}

        // .then((r) => {
        //     if (r.ok) {
        //         console.log("i am in the r.ok file")
        //         r.json().then((data) => {
        //             setUser(data)
        //             navigate("/");
        //         })}
        //     else {
        //     r.json().then((err) => setErrors(err.errors));
        //     }
        //     })}

    return (
        <div className="homepage-layout">
            <div className="flexBoxRow">
                {/* <div className="flexBoxColumn"> */}
                    {/* <h1 className="title-text">Little Middle Challah</h1> */}
                <div className="logo-img-container">
                    <div className="logo-image"></div>
                </div>
                {/* </div> */}
                <div className="flexBoxColumnSUInfo">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <h1 className="SUtitle">SIGN UP</h1>
                        <p className="centerText bottomSU"><a href="/login">
                            Already a Little Middle Member? Log in!
                        </a></p>
                        {errors.map((err) => (
                            <p key={err} className="errorMessage">
                                {err}.
                            </p>
                        ))}
                        {/* <p className="errorMessage">{errors}</p> */}
                        <div className="SUCouplet1">
                            <label className="SU-label">First name:</label>
                            <input className="SU-input"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                id="firstName"
                                autoComplete='off'
                                label="First name"
                                name="firstName" />
                        </div>
                        <div className="SUCouplet">
                            <label className="SU-label">Last name:</label>
                            <input className="SU-input"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                id="lastName"
                                autoComplete='off'
                                label="Last name"
                                name="lastName" />
                        </div>
                        <div className="SUCouplet">
                            <label className="SU-label">Email:</label>
                            <input className="SU-input"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                autoComplete='off'
                                label="Email"
                                name="email" />
                        </div>
                        <div className="SUCouplet">
                            <label className="SU-label">Phone number:</label>
                            <input className="SU-input"
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone"
                                autoComplete='off'
                                label="Phone number"
                                name="phone" />
                        </div>
                        <div className="SUCouplet">
                            <label className="SU-label">Create a username:</label>
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
                            <label className="SU-label">Create a password:</label>
                            <input className="SU-input" type="password"
                                name="password"
                                value={password}
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                id="password" />
                        </div>
                        <div className="SUCouplet">
                            <label className="SU-label">Confirm password:</label>
                            <input className="SU-input"
                                type="password"
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                id="password_confirmation"
                                autoComplete='off'
                                name="password_confirmation" />
                        </div>
                        <div className="centerText">
                            <button className="signUpSubmitBtn" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;