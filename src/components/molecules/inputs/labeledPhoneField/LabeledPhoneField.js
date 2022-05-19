import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import PhoneField from '../phoneField/PhoneField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledPhoneFieldStyled = createStyled('LabeledPhoneFieldStyle', 'div', [
    'fixedWidth',
])

const LabeledPhoneField = ({
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
    clearTouch,
    ...rest
}) => {
    return (
        <LabeledPhoneFieldStyled fixedWidth={fixedWidth}>
            <LabeledInputTemplate
                alignLeft={alignLeft}
                alignLeftFixedWidth={alignLeftFixedWidth}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <PhoneField
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
                    clearTouch={clearTouch}
                    {...rest}
                />
            </LabeledInputTemplate>
        </LabeledPhoneFieldStyled>
    )
}

export default LabeledPhoneField
