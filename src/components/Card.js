import React from "react"

export default function Card (props) {
    let badgeText 
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.openSpots === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-wrapper"> 
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="katy-photo" src={process.env.PUBLIC_URL + `images/${props.data.coverImg}`} alt="katy swimmer"/>
            <div className="card-stats">
                <img className="card-star" src={process.env.PUBLIC_URL + "images/star.png"} alt="red star"/>
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) *</span>
                <span className="gray"> {props.data.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.data.price}</strong> / person</p>
        </div>
    )
}