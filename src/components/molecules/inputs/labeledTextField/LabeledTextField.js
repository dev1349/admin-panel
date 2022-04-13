import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../textField/TextField'

//todo export
export const LabeledTextFieldStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'fixedWidth',
    name: 'LabeledTextFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LabeledTextField = ({
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
                <TextField
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

export default LabeledTextField
