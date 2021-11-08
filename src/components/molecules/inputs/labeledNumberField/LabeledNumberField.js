import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import NumberField from '../../../atoms/inputs/numberField/NumberField'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'

const LabeledNumberFieldStyled = styled('div', {
    name: 'LabeledNumberFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabeledNumberField = ({
    id,
    label,
    name,
    pattern,
    value,
    onChange,
    autoFocus,
}) => {
    const changeHandler = evt => {
        if (new RegExp(pattern).test(evt.target.value)) {
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
            evt.code === 'Period'
        ) {
            evt.preventDefault()
        }
    }
    return (
        <LabeledNumberFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <NumberField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    onKeyDown={inputNumberKeyDownHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </LabeledNumberFieldStyled>
    )
}

export default WSLabeledNumberField
