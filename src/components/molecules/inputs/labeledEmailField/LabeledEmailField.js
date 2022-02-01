import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import { LabeledTextFieldStyled } from '../labeledTextField/LabeledTextField'
import EmailField from '../emailField/EmailField'

const LabeledEmailField = ({
    id,
    label,
    name,
    value,
    onChange,
    autoFocus,
    pattern,
    alignLeft,
    alignLeftFixedWidth,
    fixedWidth,
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    ...rest
}) => {
    return (
        <LabeledTextFieldStyled fixedWidth={fixedWidth}>
            <LabeledInputTemplate
                alignLeft={alignLeft}
                alignLeftFixedWidth={alignLeftFixedWidth}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <EmailField
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    fullWidth={true}
                    pattern={pattern}
                    shouldValidate={shouldValidate}
                    required={required}
                    validationRules={validationRules}
                    validatingNow={validatingNow}
                    setValidationResult={setValidationResult}
                    haveHelperText={haveHelperText}
                    {...rest}
                />
            </LabeledInputTemplate>
        </LabeledTextFieldStyled>
    )
}

export default LabeledEmailField
