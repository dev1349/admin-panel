import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import NumberField from '../numberField/NumberField'
import { createStyled } from '../../../../services/style/createStyled'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import Tooltip from '../../../atoms/tooltip/Tooltip'
import LabelWithHelpTemplate from '../../../templates/labelWithHelpTemplate/LabelWithHelpTemplate'

const LabeledNumberFieldStyled = createStyled('LabeledNumberFieldStyle', 'div')

const WSLabeledNumberField = ({ id, label, name, pattern, value, onChange, autoFocus, onPaste, isHelp, helpText, helpIcon }) => {
    return (
        <LabeledNumberFieldStyled>
            <LabeledInputTemplate>
                <LabelWithHelpTemplate>
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                    {isHelp && (
                        <Tooltip arrow title={helpText} placement={'top'}>
                            <div>
                                <FlexTemplate alignItemsCenter>{helpIcon}</FlexTemplate>
                            </div>
                        </Tooltip>
                    )}
                </LabelWithHelpTemplate>
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
