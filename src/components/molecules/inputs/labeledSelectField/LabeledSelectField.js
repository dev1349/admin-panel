import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import SelectField from '../selectField/SelectField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledSelectFieldStyled = createStyled('LabeledSelectFieldStyle', 'div')

const LabeledSelectField = ({ id, label, alignLeft, fixedWidthWithMarginRight, ...rest }) => {
    return (
        <LabeledSelectFieldStyled>
            <LabeledInputTemplate alignLeft={alignLeft} fixedWidthWithMarginRight={fixedWidthWithMarginRight}>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <SelectField id={id} fullWidth {...rest} />
            </LabeledInputTemplate>
        </LabeledSelectFieldStyled>
    )
}

export default LabeledSelectField
