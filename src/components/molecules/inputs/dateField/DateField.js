import React from 'react'
import TextField from '../../../atoms/inputs/textField/TextField'

const DateField = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    fullWidth,
    ...rest
}) => {
    const changeHandler = evt => {
        onChange({ [name]: evt.target.value })
    }
    return (
        <TextField
            id={id}
            fullWidth={fullWidth}
            name={name}
            value={!value ? '' : value}
            onChange={changeHandler}
            autoFocus={autoFocus}
            type={'Date'}
            {...rest}
        />
    )
}

export default DateField
