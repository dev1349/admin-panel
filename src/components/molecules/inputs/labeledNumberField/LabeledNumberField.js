import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import NumberField from '../../../atoms/inputs/numberField/NumberField'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'

const InputWrapperStyled = styled.div``

const InputLabelStyled = styled(InputLabel)``

const NumberFieldStyled = styled(NumberField)``

const MyLabeledNumberField = ({
    id,
    label,
    name,
    pattern,
    value,
    onChange,
    autoFocus,
}) => {
    const changeHandler = evt => {
        if (new RegExp(pattern).test(evt.target.value)) {
            const sendValue =
                evt.target.value === '' ? null : parseInt(evt.target.value)
            onChange({ [name]: sendValue })
        }
    }
    const inputNumberKeyDownHandler = evt => {
        if (
            evt.code === 'KeyE' ||
            evt.code === 'Equal' ||
            evt.code === 'Minus' ||
            evt.code === 'Period'
        ) {
            evt.preventDefault()
        }
    }
    return (
        <InputWrapperStyled>
            <LabeledInputTemplate>
                <InputLabelStyled htmlFor={id}>{label}</InputLabelStyled>
                <NumberFieldStyled
                    id={id}
                    fullWidth={true}
                    name={name}
                    pattern={pattern}
                    value={value}
                    onChange={changeHandler}
                    onKeyDown={inputNumberKeyDownHandler}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </InputWrapperStyled>
    )
}

export default MyLabeledNumberField
