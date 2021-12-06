import React from 'react'
import { styled } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import DateTimeFromToField from '../dateTimeFromToField/DateTimeFromToField'

export const LabeledDateTimeFromToFieldStyled = styled('div', {
    name: 'LabeledDateTimeFromToFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LabeledDateTimeFromToField = ({ id, label, date, timeFrom, timeTo }) => {
    return (
        <LabeledDateTimeFromToFieldStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <DateTimeFromToField
                    date={date}
                    timeFrom={timeFrom}
                    timeTo={timeTo}
                />
            </LabeledInputTemplate>
        </LabeledDateTimeFromToFieldStyled>
    )
}

export default LabeledDateTimeFromToField
