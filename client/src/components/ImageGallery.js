import React from "react";


function ImageGallery() {
    return (
        <>
            {/* <NavBar /> */}
            <h1 className="pageTitle">Image Gallery</h1>
            <div className="flexRowGrid">
                <div className="oneImageContainer">
                    <div id="pic1" className="imageStyle" />
                    <p className="imageCaption">22 lb bag of flour</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic2" className="imageStyle" />
                    <p className="imageCaption">Rising dough!</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic3" className="imageStyle" />
                    <p className="imageCaption">Orders waiting to be packaged</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic7" className="imageStyle" />
                    <p className="imageCaption">Freshly baked challahs</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic8" className="imageStyle" />
                    <p className="imageCaption">Braided dough in the middle of their last rise</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic10" className="imageStyle" />
                    <p className="imageCaption">Special rainbow edition</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic4" className="imageStyle" />
                    <p className="imageCaption">Packaged orders</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic6" className="imageStyle" />
                    <p className="imageCaption">More orders</p>
                </div>
                <div className="oneImageContainer">
                    <div id="pic11" className="imageStyle" />
                    <p className="imageCaption">Ready to be picked up!</p>
                </div>

                {/* <div className="imageContainer">
                    <img id="pic2" className="imageStyle" alt="Image 2" />
                </div>
                <div className="imageContainer">
                    <img id="pic3" className="imageStyle" alt="Image 3" src="images/challah1.jpeg" />
                </div>
                <div className="imageContainer">
                    <img id="pic4" className="imageStyle" alt="Image 4" src="images/challah2.jpeg" />
                </div> */}
                {/* <img alt="Image 2" src="" />
                <img alt="Image 3" src="" />
                <img alt="Image 4" src="" /> */}
            </div>
        </>
    )
}

export default ImageGallery;