import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import DateTimeFromToField from '../dateTimeFromToField/DateTimeFromToField'
import { useStyle } from '../../../../hooks/useStyle'


const LabeledDateTimeFromToField = ({ id, label, date, timeFrom, timeTo }) => {
    const LabeledDateTimeFromToFieldStyled = useStyle('LabeledDateTimeFromToFieldStyled', 'div', null)
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
