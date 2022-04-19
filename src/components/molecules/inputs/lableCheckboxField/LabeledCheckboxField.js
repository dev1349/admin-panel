import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import { useStyle } from '../../../../hooks/useStyle'


const WSLabeledCheckboxField = ({
                                    id,
                                    label,
                                    name,
                                    checked,
                                    onChange,
                                    alignLeft,
                                }) => {
    const LabeledCheckboxStyled = useStyle('LabeledCheckboxStyle', 'div')
    const changeHandler = evt => {
        const sendValue = evt.target.checked === '' ? null : evt.target.checked
        onChange({ [name]: sendValue })
    }
    return (
        <LabeledCheckboxStyled>
            <LabeledInputTemplate alignLeft={alignLeft}>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <Checkbox
                    name={name}
                    checked={checked}
                    onChange={changeHandler}
                />
            </LabeledInputTemplate>
        </LabeledCheckboxStyled>
    )
}

export default WSLabeledCheckboxField
