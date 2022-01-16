import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import NumberField from '../numberField/NumberField'

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
    onPaste,
}) => {
    return (
        <LabeledNumberFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <NumberField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    pattern={pattern}
                    onPaste={onPaste}
                />
            </LabeledInputTemplate>
        </LabeledNumberFieldStyled>
    )
}

export default WSLabeledNumberField
