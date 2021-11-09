import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import SelectField from '../selectField/SelectField'

const InputWrapper = styled.div``

const WSLabeledSelectField = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
    items,
}) => {
    const changeHandler = evt => {
        onChange({ [name]: evt.target.value })
    }
    return (
        <InputWrapper>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <SelectField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    autoFocus={autoFocus}
                    items={items}
                />
            </LabeledInputTemplate>
        </InputWrapper>
    )
}

export default WSLabeledSelectField
