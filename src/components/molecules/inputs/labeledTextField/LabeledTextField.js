import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import TextField from '../textField/TextField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledTextFieldStyled = createStyled('LabeledTextFieldStyle', 'div')

const LabeledTextField = ({ id, label, alignLeft, alignLeftFixedWidth, ...rest }) => {
    return (
        <LabeledTextFieldStyled>
            <LabeledInputTemplate alignLeft={alignLeft} alignLeftFixedWidth={alignLeftFixedWidth}>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField id={id} fullWidth {...rest} />
            </LabeledInputTemplate>
        </LabeledTextFieldStyled>
    )
}

export default LabeledTextField
