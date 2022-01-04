import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../textField/TextField'

export const LabeledTextFieldStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'fixedWidth',
    name: 'LabeledTextFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabeledTextField = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
    pattern,
    alignLeft,
    alignLeftFixedWidth,
    fixedWidth,
    ...rest
}) => {
    return (
        <LabeledTextFieldStyled fixedWidth={fixedWidth}>
            <LabeledInputTemplate
                alignLeft={alignLeft}
                alignLeftFixedWidth={alignLeftFixedWidth}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    fullWidth={true}
                    pattern={pattern}
                    {...rest}
                />
            </LabeledInputTemplate>
        </LabeledTextFieldStyled>
    )
}

export default WSLabeledTextField
