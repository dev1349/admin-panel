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


const InputText = ({placeholder, name, label, id, value, onChange, autofocus}) => {
    const changeHandler = (evt) => {
        const sendingValue = evt.target.value === '' ? null : evt.target.value
        onChange(sendingValue)
    }


    return (
        <FieldContainer>
            <FieldLabel htmlFor={id} >
                {label}
            </FieldLabel>
            <FieldInput
                placeholder={placeholder}
                type={'text'}
                name={name}
                id={id}
                value={value === null ? '' : value}
                onChange={changeHandler}
                autoFocus={autofocus}
            />
        </FieldContainer>
    )
}


export default InputText