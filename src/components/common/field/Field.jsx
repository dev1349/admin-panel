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


const Field = ({type, typeOfInput, name, label, id, value, onChange, autofocus}) => {
    const changeFieldValueHandler = (evt) => {
        let sendValue
        if (typeOfInput === 'number') {
            sendValue = evt.target.value === '' ? null : parseInt(evt.target.value)
        } else {
            sendValue = evt.target.value
        }

        onChange({
            [name]: sendValue
        })
    }

    const inputNumberKeyDownHandler = (evt) => {
        if (evt.code === 'KeyE') {
            evt.preventDefault()
        }
    }

    switch (type) {
        case 'input': {
            return (
                <FieldContainer>
                    <FieldLabel
                        htmlFor={id}
                    >
                        {label}
                    </FieldLabel>
                    <FieldInput
                        type={typeOfInput}
                        name={name}
                        id={id}
                        value={value === null ? '' : value}
                        onChange={changeFieldValueHandler}
                        onKeyDown={typeOfInput === 'number' ? inputNumberKeyDownHandler : null}
                        autoFocus={autofocus}
                    />
                </FieldContainer>
            )
        }
        default:
            return null
    }
}


export default Field