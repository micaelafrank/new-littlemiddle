import React, { useEffect, useState} from "react";
import { NavLink } from 'react-router-dom'


function NavBar({ user, setUser }) {

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        })
    }, [])
    console.log(user);


    return (
        <nav className="navBarLayout">
            <div className="flexBoxRowNav">
                <h1 className="title-text"><a id="navBarLMCName" href="/">Little Middle Challah</a></h1>
                <div className="flexBoxRowNavTabs">
                    {/* flexBoxColNav" */}
                    <NavLink className="navFont" to="/about">About</NavLink>
                    <NavLink className="navFont" to="/order">Order form</NavLink>
                    <NavLink className="navFont" to="/gallery">Image gallery</NavLink>
                    <NavLink className="navFont" to="/donations">Where we donate</NavLink>
                    <NavLink className="navFont" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;