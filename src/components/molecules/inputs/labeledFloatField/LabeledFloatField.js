import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import FloatField from '../floatField/FloatField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledFloatFieldStyled = createStyled('LabeledTextFieldStyle', 'div', ['fixedWidth'])

const LabeledFloatField = ({ id, label, ...rest }) => {
    return (
        <LabeledFloatFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <FloatField id={id} fullWidth {...rest} />
            </LabeledInputTemplate>
        </LabeledFloatFieldStyled>
    )
}

export default LabeledFloatField
