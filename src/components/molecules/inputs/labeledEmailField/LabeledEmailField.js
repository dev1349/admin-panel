import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import EmailField from '../emailField/EmailField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledEmailFieldStyled = createStyled('LabeledEmailFieldStyle', 'div')

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
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    ...rest
}) => {
    return (
        <LabeledEmailFieldStyled>
            <LabeledInputTemplate alignLeft={alignLeft} alignLeftFixedWidth={alignLeftFixedWidth}>
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
        </LabeledEmailFieldStyled>
    )
}

export default LabeledEmailField
