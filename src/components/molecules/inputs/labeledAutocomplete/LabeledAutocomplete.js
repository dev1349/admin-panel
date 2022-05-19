import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Autocomplete from '../autocomplete/Autocomplete'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledAutocompleteStyled = createStyled(
    'LabeledAutocompleteStyle',
    'div'
)

const LabeledAutocomplete = ({
    id,
    label,
    name,
    value,
    changeValue,
    options,
    getOptionLabel,
    canAddValue,
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    filterOptions,
    selectOnFocus,
    clearOnBlur,
    handleHomeEndKeys,
    ...rest
}) => {
    return (
        <LabeledAutocompleteStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <Autocomplete
                    textFieldId={id}
                    name={name}
                    value={value}
                    changeValue={changeValue}
                    options={options}
                    getOptionLabel={getOptionLabel}
                    canAddValue={canAddValue}
                    shouldValidate={shouldValidate}
                    required={required}
                    validationRules={validationRules}
                    validatingNow={validatingNow}
                    setValidationResult={setValidationResult}
                    haveHelperText={haveHelperText}
                    filterOptions={filterOptions}
                    selectOnFocus={selectOnFocus}
                    clearOnBlur={clearOnBlur}
                    handleHomeEndKeys={handleHomeEndKeys}
                    {...rest}
                />
            </LabeledInputTemplate>
        </LabeledAutocompleteStyled>
    )
}

export default LabeledAutocomplete
