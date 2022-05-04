import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import DropDownTextFieldWithValidation from '../dropDownTextFieldWithValidation/DropDownTextFieldWithValidation'
import { useStyle } from '../../../../hooks/useStyle'

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
    const LabeledTextFieldStyled = useStyle('LabeledTextFieldStyle', 'div', ['fixedWidth'])
    return (
        <LabeledTextFieldStyled>
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
        </LabeledTextFieldStyled>
    )
}

export default LabeledDropDownTextFieldWithValidation
