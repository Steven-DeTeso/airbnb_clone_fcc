import React from "react";

function Hero () {
    return (
        <div className="hero-wrapper">
            <img className="hero-img" src={require("../images/photos.png")} alt="hero images"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero