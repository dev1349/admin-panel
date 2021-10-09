import styled from 'styled-components'
import React from 'react'

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


const InputNumber = ({placeholder, name, label, id, value, onChange, autofocus, disabled}) => {
    const changeHandler = (evt) => {
        const sendingValue = evt.target.value === '' ? null : parseInt(evt.target.value)
        onChange(sendingValue)
    }

    const inputNumberKeyDownHandler = (evt) => {
        if (evt.code === 'KeyE') {
            evt.preventDefault()
        }
    }
    return (
        <FieldContainer>
            <FieldLabel
                htmlFor={id}
            >
                {label}
            </FieldLabel>
            <FieldInput
                placeholder={placeholder}
                type={'number'}
                name={name}
                id={id}
                value={value === null ? '' : value}
                onChange={changeHandler}
                onKeyDown={inputNumberKeyDownHandler}
                autoFocus={autofocus}
                disabled={disabled}
            />
        </FieldContainer>
    )
}


export default InputNumber