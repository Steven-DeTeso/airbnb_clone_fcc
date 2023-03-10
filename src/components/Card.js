import React from "react"

export default function Card (props) {
    return (
        <div className="card-wrapper"> 
            <img className="katy-photo" src={process.env.PUBLIC_URL + `images/${props.img}`} alt="katy swimmer"/>
            <div className="card-stats">
                <img className="card-star" src={process.env.PUBLIC_URL + "images/star.png"} alt="red star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) *</span>
                <span className="gray"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}