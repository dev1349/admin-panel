import React from 'react'
import TextField from '../../../atoms/inputs/textField/TextField'

const TextFieldWS = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    fullWidth,
    pattern,
    placeholder,
    ...rest
}) => {
    const changeHandler = evt => {
        if (!pattern) {
            const sendValue = evt.target.value === '' ? null : evt.target.value
            onChange({ [name]: sendValue })
            return
        }

        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            const sendValue = evt.target.value === '' ? null : evt.target.value
            onChange({ [name]: sendValue })
        }
    }
    return (
        <TextField
            id={id}
            fullWidth={fullWidth}
            name={name}
            value={!value ? '' : value}
            onChange={changeHandler}
            autoFocus={autoFocus}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default TextFieldWS
