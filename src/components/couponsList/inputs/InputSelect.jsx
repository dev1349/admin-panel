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

const FieldSelect = styled.select`
    padding: 4px 2px;
    display: block;
    width: 100%;

    @media (min-width: 600px) {
        margin-left: 10px;
        width: 75%;
    }
`

const InputSelect = ({ label, id, value, onChange, autofocus, items }) => {
    const changeHandler = evt => {
        let sendingValue = evt.target.value === '' ? null : evt.target.value

        if (sendingValue === 'true') {
            sendingValue = true
        } else if (sendingValue === 'false') {
            sendingValue = false
        }

        onChange(sendingValue)
    }

    return (
        <FieldContainer>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldSelect
                value={value === null ? '' : value}
                onChange={changeHandler}
                autoFocus={autofocus}
            >
                <option key={0} value={''}>
                    Выберите вариант
                </option>

                {items.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.title}
                    </option>
                ))}
            </FieldSelect>
        </FieldContainer>
    )
}

export default InputSelect
