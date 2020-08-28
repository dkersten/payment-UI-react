import React from 'react';

const Form = (props) => {

    const handleNameChange = (e) => {
        props.updateNameFunc(e.target.value)
    }

    const handleNumChange = (e) => {
        props.updateNumFunc(e.target.value)
    }

    const handleDateChange = (e) => {
        props.updateDateFunc(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.formSubmitFunc()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Payment Information</h2>
            <label htmlFor="name">Name on Card:</label>
            <input onChange={handleNameChange} value={props.name} type="text" className="input-name" name="name" id=""/>
            <label htmlFor="number">Name on Card:</label>
            <input onChange={handleNumChange} value={props.num} type="text" className="input-num" name="number" id=""/>
            <label htmlFor="expiration">Name on Card:</label>
            <input onChange={handleDateChange} value={props.date} className="input-date" type="month" name="expiration" id=""/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form