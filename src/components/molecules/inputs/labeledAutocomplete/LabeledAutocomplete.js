import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Autocomplete from '../autocomplete/Autocomplete'

export const LabeledAutocompleteStyled = styled('div', {
    name: 'LabeledAutocompleteStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LabeledAutocomplete = ({
    id,
    label,
    name,
    value,
    changeValue,
    options,
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
                    {...rest}
                />
            </LabeledInputTemplate>
        </LabeledAutocompleteStyled>
    )
}

export default LabeledAutocomplete
