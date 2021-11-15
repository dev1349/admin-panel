import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import MultilineField from '../../../atoms/inputs/multilineField/MultilineField'

const LabeledTextFieldMultilineStyled = styled('div', {
    name: 'LabeledTextFieldMultilineStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabeledMultilineTextField = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
}) => {
    const changeHandler = evt => {
        const sendValue = evt.target.value === '' ? null : evt.target.value
        onChange({ [name]: sendValue })
    }
    return (
        <LabeledTextFieldMultilineStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <MultilineField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={!value ? '' : value}
                    multiline
                    rows={4}
                    onChange={changeHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </LabeledTextFieldMultilineStyled>
    )
}

export default WSLabeledMultilineTextField
