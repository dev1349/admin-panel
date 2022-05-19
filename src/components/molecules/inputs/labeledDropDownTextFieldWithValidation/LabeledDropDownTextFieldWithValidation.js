import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import DropDownTextFieldWithValidation from '../dropDownTextFieldWithValidation/DropDownTextFieldWithValidation'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledDropDownTextFieldWithValidationStyled = createStyled(
    'LabeledDropDownTextFieldWithValidationStyle',
    'div',
    ['fixedWidth']
)

const LabeledDropDownTextFieldWithValidation = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
    pattern,
    helperText,
    check,
}) => {
    return (
        <LabeledDropDownTextFieldWithValidationStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <DropDownTextFieldWithValidation
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    fullWidth={true}
                    pattern={pattern}
                    helperText={helperText}
                    check={check}
                />
            </LabeledInputTemplate>
        </LabeledDropDownTextFieldWithValidationStyled>
    )
}

export default LabeledDropDownTextFieldWithValidation
