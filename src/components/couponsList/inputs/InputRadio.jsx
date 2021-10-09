import React from 'react'
import styled from 'styled-components'


const RadioFieldContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`

const RadioFieldLabel = styled.label`
  display: flex;
  align-items: center;
`

const RadioFieldInput = styled.input`
  display: block;
  margin: 0;
`

const RadioFieldTitle = styled.div`
    margin-left: 5px;
`


const InputRadio = ({name, label, id, value, onChange, autofocus, checked}) => {
    const changeHandler = (evt) => {
        let sendingValue = evt.target.value === '' ? null : evt.target.value

        if (sendingValue === 'true') {
            sendingValue = true
        } else if (sendingValue === 'false') {
            sendingValue = false
        }

        onChange(sendingValue)
    }


    return (
        <RadioFieldContainer>
            <RadioFieldLabel>
                <RadioFieldInput
                    type={'radio'}
                    name={name}
                    id={id}
                    value={value}
                    onChange={changeHandler}
                    checked={checked}
                    autoFocus={autofocus}
                />
                <RadioFieldTitle>{label}</RadioFieldTitle>
            </RadioFieldLabel>
        </RadioFieldContainer>
    )
}


export default InputRadio