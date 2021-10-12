import React from 'react'
import './Modal.sass'
import Button from '../button/Button'

const Modal = ({ message, action }) => {
    return (
        <div className="modal--overlay" onClick={action}>
            <div className="modal--window">
                <h1 className="modal--message">{message}</h1>
                <Button
                    className="modal--button"
                    onClick={action}
                    title={'Ok'}
                />
            </div>
        </div>
    )
}

export default Modal
