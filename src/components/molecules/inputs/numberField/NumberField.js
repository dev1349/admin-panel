import React from 'react'
import NumberField from '../../../atoms/inputs/numberField/NumberField'

const NumberFieldWS = ({
    name,
    pattern,
    value,
    onChange,
    autoFocus,
    fullWidth,
    forTable,
    disabled,
}) => {
    const changeHandler = evt => {
        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            const sendValue =
                evt.target.value === '' ? null : parseInt(evt.target.value)
            onChange({ [name]: sendValue })
        }
    }
    const inputNumberKeyDownHandler = evt => {
        if (
            evt.code === 'KeyE' ||
            evt.code === 'Equal' ||
            evt.code === 'Minus' ||
            evt.code === 'Period' ||
            evt.code === 'NumpadDecimal'
        ) {
            evt.preventDefault()
        }
    }
    return (
        <NumberField
            fullWidth={fullWidth}
            name={name}
            value={value === null || value === undefined ? '' : value}
            onChange={changeHandler}
            onKeyDown={inputNumberKeyDownHandler}
            autoFocus={autoFocus}
            forTable={forTable}
            disabled={disabled}
        />
    )
}

export default NumberFieldWS
