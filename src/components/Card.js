import React from 'react';

const Card = () => {
    return(
        <div className="card">
            <h1>1st Nat. Bank of Spongebob</h1>
            <h2 className="card-num"></h2>
            <h3 className="member">Card Member</h3>
            <h3 className="name"></h3>
            <h3 className="expiration">Exp. Date:</h3>
            <h3 className="date">March 2021</h3>
            <div className="circle-sm"></div>
            <div className="circle-bg"></div>
        </div>
    )
}

export default Card