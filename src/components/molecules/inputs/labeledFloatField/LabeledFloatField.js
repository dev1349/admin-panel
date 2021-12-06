import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../textField/TextField'

const InputWrapper = styled.div``

const LabeledFloatField = ({
    id,
    label,
    name,
    pattern,
    value,
    onChange,
    autoFocus,
}) => {
    return (
        <InputWrapper>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    fullWidth={true}
                    name={name}
                    pattern={pattern}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </InputWrapper>
    )
}

export default LabeledFloatField
