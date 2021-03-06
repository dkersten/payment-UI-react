import React from 'react';

const Card = (props) => {

    const formatCCNum = () => {
        let ccNum = props.num
        let formatedNum = ccNum.match(/.{1,4}/g)
        return formatedNum.join(' ')
    }

    return(
        <div className="card">
            <h1>1st Nat. Bank of Spongebob</h1>
            <h2 className="card-num">{formatCCNum()}</h2>
            <h3 className="member">Card Member</h3>
            <h3 className="name">{props.name}</h3>
            <h3 className="expiration">Exp. Date:</h3>
            <h3 className="date">{props.date}</h3>
            <div className="circle-sm"></div>
            <div className="circle-bg"></div>
        </div>
    )
}

export default Card