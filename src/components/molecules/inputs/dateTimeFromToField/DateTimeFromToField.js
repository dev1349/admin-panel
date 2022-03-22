import React from 'react'
import DateField from '../dateField/DateField'
import SelectField from '../selectField/SelectField'
import TextBetweenInputs from '../../../atoms/textElements/textBetweenInputs/TextBetweenInputs'

const DateTimeFromToField = ({ date, timeFrom, timeTo }) => {
    return (
        <>
            <DateField
                id={date.id}
                name={date.name}
                value={date.value}
                onChange={date.changeValue}
                autoFocus={date.autoFocus}
            />
            <TextBetweenInputs>&nbsp; с &nbsp;</TextBetweenInputs>
            <SelectField
                name={timeFrom.hours.name}
                value={timeFrom.hours.value}
                onChange={timeFrom.hours.changeValue}
                items={timeFrom.hours.items}
                defaultLabel={timeFrom.hours.defaultLabel}
                isStartItemDisabled={timeFrom.hours.isStartItemDisabled}
                disabled={timeFrom.hours.disabled}
            />
            <SelectField
                name={timeFrom.minutes.name}
                value={timeFrom.minutes.value}
                onChange={timeFrom.minutes.changeValue}
                items={timeFrom.minutes.items}
                defaultLabel={timeFrom.minutes.defaultLabel}
                isStartItemDisabled={timeFrom.minutes.isStartItemDisabled}
                disabled={timeFrom.minutes.disabled}
            />
            <TextBetweenInputs>&nbsp; до &nbsp;</TextBetweenInputs>
            <SelectField
                name={timeTo.hours.name}
                value={timeTo.hours.value}
                onChange={timeTo.hours.changeValue}
                items={timeTo.hours.items}
                defaultLabel={timeTo.hours.defaultLabel}
                isStartItemDisabled={timeTo.hours.isStartItemDisabled}
                disabled={timeTo.hours.disabled}
            />
            <SelectField
                name={timeTo.minutes.name}
                value={timeTo.minutes.value}
                onChange={timeTo.minutes.changeValue}
                items={timeTo.minutes.items}
                defaultLabel={timeTo.minutes.defaultLabel}
                isStartItemDisabled={timeTo.minutes.isStartItemDisabled}
                disabled={timeTo.minutes.disabled}
            />
        </>
    )
}

export default DateTimeFromToField
