import React from 'react'
import MultilineField from '../../../atoms/inputs/multilineField/MultilineField'

const TextFieldMultiline = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    placeholder,
    fullWidth,
    ...rest
}) => {
    const changeHandler = evt => {
        const sendValue = evt.target.value === '' ? null : evt.target.value
        onChange({ [name]: sendValue })
    }
    return (
        <MultilineField
            id={id}
            name={name}
            value={!value ? '' : value}
            multiline
            rows={4}
            onChange={changeHandler}
            autoFocus={autoFocus}
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...rest}
        />
    )
}

export default TextFieldMultiline
