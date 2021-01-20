import React from 'react'

const basicInfo = (props) => {
    return (
        <div className='container'>
            <p>Name: {props.name}</p>
            <p>Number: {props.number}</p>
            <p>DOB: {props.dob}</p>
        </div>
    )
}

export default basicInfo;
