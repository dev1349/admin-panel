import React from 'react'
import NumberField from '../../../atoms/inputs/numberField/NumberField'

const NumberFieldMolecule = ({
    name,
    pattern = '^[0-9]*$',
    value,
    onChange,
    autoFocus,
    fullWidth,
    forTable,
    disabled,
    onPaste,
    ...rest
}) => {
    const changeHandler = evt => {
        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            const intValue = parseInt(evt.target.value)
            if (intValue > Number.MAX_SAFE_INTEGER) return
            const sendValue = evt.target.value === '' ? null : intValue
            onChange({ [name]: sendValue })
        }
    }

    return (
        <NumberField
            fullWidth={fullWidth}
            name={name}
            value={value === null || value === undefined ? '' : value}
            onChange={changeHandler}
            autoFocus={autoFocus}
            forTable={forTable}
            disabled={disabled}
            onPaste={onPaste}
            {...rest}
        />
    )
}

export default NumberFieldMolecule
