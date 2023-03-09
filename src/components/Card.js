import React from "react"

export default function Card () {
    return (
        <div className="card-wrapper">
            <img className="katy-photo" src={require("../images/katy.png")} alt="katy swimmer"/>
            <div className="card-stats">
                <img className="card-star" src={require("../images/star.png")} alt="red star"/>
                <span>5.0</span>
                <span className="gray">(6) *</span>
                <span className="gray"> USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}