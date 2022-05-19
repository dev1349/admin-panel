import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import NumberField from '../numberField/NumberField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledNumberFieldStyled = createStyled('LabeledNumberFieldStyle', 'div')

const WSLabeledNumberField = ({ id, label, ...rest }) => {
    return (
        <LabeledNumberFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <NumberField id={id} fullWidth {...rest} />
            </LabeledInputTemplate>
        </LabeledNumberFieldStyled>
    )
}

export default WSLabeledNumberField
