import React from 'react'
import TextField from '../../../atoms/inputs/textField/TextField'

const FloatField = ({
    name,
    pattern = '^(|0|0[.,]|0[.,][0-9]*|[1-9][0-9]*[,.]?[0-9]*)$',
    value,
    onChange,
    autoFocus,
    fullWidth,
    disabled,
    forTable,
    ...rest
}) => {
    const changeHandler = evt => {
        if (!new RegExp(pattern).test(evt.target.value)) return

        let sendValue = evt.target.value === '' ? null : evt.target.value
        if (sendValue) {
            sendValue = sendValue.replace(',', '.')
        }
        onChange({ [name]: sendValue })
    }

    return (
        <TextField
            fullWidth={fullWidth}
            name={name}
            value={!value ? '' : value}
            onChange={changeHandler}
            autoFocus={autoFocus}
            disabled={disabled}
            forTable={forTable}
            {...rest}
        />
    )
}

export default FloatField
