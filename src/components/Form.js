import React from 'react';

const Form = () => {
    return(
        <form action="">
            <h2>Payment Information</h2>
            <label htmlFor="name">Name on Card:</label>
            <input type="text" className="input-name" name="name" id=""/>
            <label htmlFor="number">Name on Card:</label>
            <input type="text" className="input-num" name="number" id=""/>
            <label htmlFor="expiration">Name on Card:</label>
            <input className="input-date" type="month" name="expiration" id=""/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form