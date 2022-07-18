import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextFieldMultiline from '../textFieldMultiline/TextFieldMultiline'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledTextFieldMultilineStyled = createStyled('LabeledTextFieldMultilineStyle', 'div')

const LabeledMultilineTextField = ({ id, label, ...rest }) => {
    return (
        <LabeledTextFieldMultilineStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextFieldMultiline id={id} fullWidth {...rest} />
            </LabeledInputTemplate>
        </LabeledTextFieldMultilineStyled>
    )
}

export default LabeledMultilineTextField
