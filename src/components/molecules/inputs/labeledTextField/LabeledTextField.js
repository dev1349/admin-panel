import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import TextField from '../../../atoms/inputs/textField/TextField'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'

const LabeledTextFieldStyled = styled('div', {
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
}) => {
    const changeHandler = evt => {
        onChange({ [name]: evt.target.value })
    }
    return (
        <LabeledTextFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={!value ? '' : value}
                    onChange={changeHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </LabeledTextFieldStyled>
    )
}

export default WSLabeledTextField
