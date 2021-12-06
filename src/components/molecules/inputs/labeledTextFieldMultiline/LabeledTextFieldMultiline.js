import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextFieldMultiline from '../textFieldMultiline/TextFieldMultiline'

const LabeledTextFieldMultilineStyled = styled('div', {
    name: 'LabeledTextFieldMultilineStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LabeledMultilineTextField = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
    placeholder,
}) => {
    return (
        <LabeledTextFieldMultilineStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextFieldMultiline
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    multiline
                    rows={4}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                />
            </LabeledInputTemplate>
        </LabeledTextFieldMultilineStyled>
    )
}

export default LabeledMultilineTextField
