import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../../../atoms/inputs/textField/TextField'

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
    const changeHandler = evt => {
        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            const sendValue = evt.target.value === '' ? null : evt.target.value
            onChange({ [name]: sendValue })
        }
    }
    const inputNumberKeyDownHandler = evt => {
        if (
            evt.code === 'KeyE' ||
            evt.code === 'Equal' ||
            evt.code === 'Minus'
        ) {
            evt.preventDefault()
        }
    }
    return (
        <InputWrapper>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    fullWidth={true}
                    name={name}
                    pattern={pattern}
                    value={!value ? '' : value}
                    onChange={changeHandler}
                    onKeyDown={inputNumberKeyDownHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </InputWrapper>
    )
}

export default LabeledFloatField
