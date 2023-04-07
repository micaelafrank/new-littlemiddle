import React from "react";


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
                    <p className="info-blurb">Kneading freshly baked challahs for communities in need.</p>
                    {/* <p className="info-blurb">A selection of flavors kneaded and baked fresh every Friday.</p> */}
                    <p className="info-blurb">Pay what you can — we donate 100% of what's earned.</p>
                    <p className="paddingB4rem">Orders for this Friday, {friDate}, are now closed. Our order form will reopen on Sunday, {nextSunDate}.</p>
                    {/* <p className="info-blurb">Donate what you can — 100% of what's earned goes directly to a charity helping communities in need.</p> */}
                    {/* <p className="info-blurb">Order forms open every Sunday for pick up on the following Friday.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Home;