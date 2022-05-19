import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import DateTimeFromToField from '../dateTimeFromToField/DateTimeFromToField'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledDateTimeFromToFieldStyled = createStyled(
    'LabeledDateTimeFromToFieldStyle',
    'div'
)

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
