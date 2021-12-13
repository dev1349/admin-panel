import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'

const LabeledCheckboxStyled = styled('div', {
    name: 'LabeledCheckboxFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabeledCheckboxField = ({
    id,
    label,
    name,
    checked,
    onChange,
    alignLeft,
}) => {
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
