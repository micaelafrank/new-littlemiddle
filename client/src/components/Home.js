import React from "react";
import NavBar from './NavBar';


function Home({ friDate, nextSunDate }) {
    return (
        <div className="homepage-layout">
            <div className="flexBoxRow">
                <div className="flexBoxColumn">
                    {/* <h1 className="title-text">Little Middle Challah</h1> */}
                    <div className="logo-img-container">
                        <div className="logo-image"></div>
                    </div>
                </div>
                <div className="flexBoxColumnInfo">
                    <p className="info-blurb paddingB4rem">Orders for {friDate} are now closed. Visit us on {nextSunDate} to place your order for next week!</p>
                    <p className="info-blurb">A selection of flavors kneaded and baked fresh every Friday.</p>
                    <p className="info-blurb">Donate what you can — 100% of what's earned goes directly to a charity helping communities in need.</p>
                    {/* <p className="info-blurb">Order forms open every Sunday for pick up on the following Friday.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Home;