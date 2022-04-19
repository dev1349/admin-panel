import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import NumberField from '../numberField/NumberField'
import { useStyle } from '../../../../hooks/useStyle'


const WSLabeledNumberField = ({
                                  id,
                                  label,
                                  name,
                                  pattern,
                                  value,
                                  onChange,
                                  autoFocus,
                                  onPaste,
                              }) => {
    const LabeledNumberFieldStyled = useStyle('LabeledNumberFieldStyle', 'div')
    return (
        <LabeledNumberFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <NumberField
                    id={id}
                    fullWidth={true}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    pattern={pattern}
                    onPaste={onPaste}
                />
            </LabeledInputTemplate>
        </LabeledNumberFieldStyled>
    )
}

export default WSLabeledNumberField
