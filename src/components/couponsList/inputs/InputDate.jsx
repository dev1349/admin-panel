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

const getDate = stringDate => stringDate.split('T')[0]

const InputDate = ({ label, id, value, onChange, autofocus }) => {
    const changeHandler = evt => {
        const sendingValue =
            evt.target.value === ''
                ? null
                : new Date(evt.target.value).toISOString()
        onChange(sendingValue)
    }

    return (
        <FieldContainer>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldInput
                type={'date'}
                id={id}
                value={value === null ? '' : getDate(value)}
                onChange={changeHandler}
                autoFocus={autofocus}
            />
        </FieldContainer>
    )
}

export default InputDate
