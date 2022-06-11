import React from 'react'


export default function Cards(props) {

    let badgeText = ""

    props.openSpots  === 0? badgeText = "SOLD OUT" : badgeText = "ONLINE"

    return (
        <div className="card">
            <div className='col'>
                <span className="badge  badge-info my-1 mx-2 py-2">{badgeText}</span>
            </div>
            <img src={`Assets/${props.coverImg}`} className="img-fluid h-75" alt="..." />
            <div className="card-footer h-25">
                <h6>{props.title}</h6>
                <small className="text-dark font-Weight-bold">⭐{props.name}</small> <br />
                <small className="text-muted"> 📍 {props.location} - ({props.stats.rating}) .{props.reviewCount}</small>
            </div>
        </div >
    )
}
