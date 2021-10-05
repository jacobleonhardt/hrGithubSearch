import React from 'react'
import './error.css'

const Error = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    )
}

export default Error
