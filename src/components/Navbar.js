import React from "react";

function Navbar () {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "images/airbnb.png"} alt="airbnb logo" />
        </nav>
    )
}

export default Navbar