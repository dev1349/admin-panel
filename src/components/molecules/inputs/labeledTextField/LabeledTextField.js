import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import TextField from '../../../atoms/inputs/textField/TextField'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'

const InputWrapperStyled = styled.div``

const InputLabelStyled = styled(InputLabel)``

const TextFieldStyled = styled(TextField)``

const MyLabeledTextField = ({
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
        <InputWrapperStyled>
            <LabeledInputTemplate>
                <InputLabelStyled htmlFor={id}>{label}</InputLabelStyled>
                <TextFieldStyled
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </InputWrapperStyled>
    )
}

export default MyLabeledTextField
