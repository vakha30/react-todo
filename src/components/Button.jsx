import React from 'react'

function Button({ children, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            { children}
        </button>
    )
}

export default Button
