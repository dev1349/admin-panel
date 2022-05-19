import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../textField/TextField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledFloatFieldStyled = createStyled('LabeledTextFieldStyle', 'div', [
    'fixedWidth',
])

const LabeledFloatField = ({
    id,
    label,
    name,
    pattern,
    value,
    onChange,
    autoFocus,
}) => {
    return (
        <LabeledFloatFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    fullWidth={true}
                    name={name}
                    pattern={pattern}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                />
            </LabeledInputTemplate>
        </LabeledFloatFieldStyled>
    )
}

export default LabeledFloatField
