import React from 'react'
import styled from 'styled-components'

const FieldContainer = styled.div`
    padding: 5px 0;

    @media (min-width: 600px) {
        display: flex;
        align-items: center;
    }
`

const FieldLabel = styled.label`
    display: block;

    @media (min-width: 600px) {
        width: 25%;
        text-align: right;
    }
`

const FieldInput = styled.input`
    display: block;
    width: 100%;

    @media (min-width: 600px) {
        margin-left: 10px;
        width: 75%;
    }
`

const InputFloat = ({
    placeholder,
    name,
    label,
    id,
    pattern,
    value,
    onChange,
    autofocus,
    disabled,
}) => {
    const changeHandler = evt => {
        const sendingValue = evt.target.value === '' ? null : evt.target.value
        if (new RegExp(pattern).test(evt.target.value)) {
            onChange(sendingValue)
        }
    }

    return (
        <FieldContainer>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldInput
                placeholder={placeholder}
                type={'text'}
                name={name}
                id={id}
                value={value === null ? '' : value}
                onChange={changeHandler}
                autoFocus={autofocus}
                disabled={disabled}
            />
        </FieldContainer>
    )
}

export default InputFloat
