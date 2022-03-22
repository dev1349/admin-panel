import React from 'react'
import TextField from '../../../atoms/inputs/textField/TextField'

const FloatField = ({
    name,
    pattern,
    value,
    onChange,
    autoFocus,
    fullWidth,
    disabled,
    forTable,
    ...rest
}) => {
    const changeHandler = evt => {
        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            const sendValue = evt.target.value === '' ? null : evt.target.value
            onChange({ [name]: sendValue })
        }
    }
    const inputNumberKeyDownHandler = evt => {
        if (
            evt.code === 'KeyE' ||
            evt.code === 'Equal' ||
            evt.code === 'Minus'
        ) {
            evt.preventDefault()
        }
    }
    return (
        <TextField
            fullWidth={fullWidth}
            name={name}
            value={!value ? '' : value}
            onChange={changeHandler}
            onKeyDown={inputNumberKeyDownHandler}
            autoFocus={autoFocus}
            disabled={disabled}
            forTable={forTable}
            {...rest}
        />
    )
}

export default FloatField
