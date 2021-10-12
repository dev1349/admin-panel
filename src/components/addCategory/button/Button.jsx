import React from 'react'

const Button = ({ className, onClick, disabled, title }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button
