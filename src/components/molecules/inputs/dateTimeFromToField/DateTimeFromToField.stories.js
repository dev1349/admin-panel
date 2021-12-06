import React from 'react'
import DateTimeFromToField from './DateTimeFromToField'

export default {
    title: 'molecules/inputs/DateTimeFromToField',
    component: DateTimeFromToField,
}

const Template = args => <DateTimeFromToField {...args} />

const fillHoursItems = (items, name) => {
    for (let i = 0; i <= 23; i++) {
        items.push({
            id: `${name}${i}`,
            label: `${i}`,
            value: `${i}`,
        })
    }
}

const fillMinutesItems = (items, name) => {
    for (let i = 1; i <= 59; i++) {
        items.push({
            id: `${name}${i}`,
            label: `${i}`,
            value: `${i}`,
        })
    }
}

const timeFromHoursItems = []
fillHoursItems(timeFromHoursItems, 'timeFromHours')

const timeFromMinutesItems = []
fillMinutesItems(timeFromMinutesItems, 'timeFromMinutes')

const timeToHoursItems = []
fillHoursItems(timeToHoursItems, 'timeFromHours')

const timeToMinutesItems = []
fillMinutesItems(timeToMinutesItems, 'timeFromMinutes')

export const Example1 = Template.bind({})
Example1.args = {
    date: {
        id: '01',
        name: 'date',
        value: '2010-10-10',
        autoFocus: true,
        changeValue: payload => console.log('Date', payload),
    },
    timeFrom: {
        hours: {
            name: 'timeFromHours',
            value: null,
            changeValue: payload => console.log('change time from', payload),
            items: timeFromHoursItems,
            defaultLabel: '--',
            isStartItemDisabled: true,
        },
        minutes: {
            name: 'timeFromMinutes',
            value: null,
            changeValue: payload => console.log('change time from', payload),
            items: timeFromMinutesItems,
            defaultLabel: '--',
            isStartItemDisabled: true,
        },
    },
    timeTo: {
        hours: {
            name: 'timeToHours',
            value: null,
            changeValue: payload => console.log('change time from', payload),
            items: timeToHoursItems,
            defaultLabel: '--',
            isStartItemDisabled: true,
        },
        minutes: {
            name: 'timeToMinutes',
            value: null,
            changeValue: payload => console.log('change time from', payload),
            items: timeToMinutesItems,
            defaultLabel: '--',
            isStartItemDisabled: true,
        },
    },
}
