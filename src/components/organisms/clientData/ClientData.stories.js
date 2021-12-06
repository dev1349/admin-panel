import React from 'react'
import ClientData from './ClientData'

export default {
    title: 'organisms/ClientData',
    component: ClientData,
}

const Template = args => <ClientData {...args} />

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
    searchClients: () => console.log('open form with registered client'),
    changeFieldsValue: payload =>
        console.log('change client field value', payload),
    clientFieldsValues: {
        clientName: null,
        clientPhone: null,
        clientEmail: null,
        hasDelivery: false,
        clientAddress: null,
        clientCity: null,
        clientDeliveryDateTime: {
            date: null,
            timeFromHours: null,
            timeFromMinutes: null,
            timeToHours: null,
            timeToMinutes: null,
        },
    },
    fields: {
        clientName: {
            name: 'clientName',
            label: 'Имя*',
            placeholder: 'Имя*',
        },
        clientPhone: {
            name: 'clientPhone',
            label: 'Телефон*',
            pattern: /^(|\+[0-9]*|[0-9]*)$/,
            helperText: 'Максимум 10 символов',
            check: [
                {
                    checking: value => {
                        return value?.length < 5
                    },
                    attentionMessage: 'Введите минимум 5 символов',
                },
                {
                    checking: value => {
                        return value?.length > 10
                    },
                    attentionMessage: 'Введите не более 10 символов',
                },
            ],
        },
        clientEmail: {
            name: 'clientEmail',
            label: 'E-mail',
            pattern:
                /^(|[a-z]\w*|[A-Z]\w*|[a-z]\w*@\w*|[A-Z]\w*@\w*|[a-z]\w*@\w*\.\w*|[A-Z]\w*@\w*\.\w*)$/,
        },
        hasDelivery: {
            name: 'hasDelivery',
            label: 'Доставка не требуется',
        },
        clientAddress: {
            name: 'clientAddress',
            label: 'Адрес',
            placeholder: 'Адрес',
        },
        clientCity: {
            name: 'clientCity',
            label: 'Населенный пункт*',
            options: [
                {
                    city: 'Киев',
                    district: null,
                    region: 'Киевская обл.',
                },
                {
                    city: 'Киев',
                    district: null,
                    region: null,
                },
                {
                    city: 'Киевское',
                    district: 'Новоодесский район',
                    region: 'Николаевская обл.',
                },
                {
                    city: 'Киевка',
                    district: 'Голопристанский район',
                    region: 'Днепровская обл.',
                },
                {
                    city: 'Киевец',
                    district: 'Николаевский район',
                    region: 'Львовская обл.',
                },
                {
                    city: 'Киевское',
                    district: 'Новониколаевский район',
                    region: 'Запорожская обл.',
                },
            ],
        },
        clientDeliveryDateTime: {
            name: 'clientDeliveryDateTime',
            label: 'Дата и время доставки',
            date: {
                id: '01',
                name: 'date',
                value: null,
                changeValue: payload =>
                    console.log('change client field value', payload),
            },
            timeFrom: {
                hours: {
                    name: 'timeFromHours',
                    items: timeFromHoursItems,
                    defaultLabel: '--',
                    isStartItemDisabled: true,
                    value: null,
                    changeValue: payload =>
                        console.log('change client field value', payload),
                },
                minutes: {
                    name: 'timeFromMinutes',
                    items: timeFromMinutesItems,
                    defaultLabel: '--',
                    isStartItemDisabled: true,
                    value: null,
                    changeValue: payload =>
                        console.log('change client field value', payload),
                },
            },
            timeTo: {
                hours: {
                    name: 'timeToHours',
                    items: timeToHoursItems,
                    defaultLabel: '--',
                    isStartItemDisabled: true,
                    value: null,
                    changeValue: payload =>
                        console.log('change client field value', payload),
                },
                minutes: {
                    name: 'timeToMinutes',
                    items: timeToMinutesItems,
                    defaultLabel: '--',
                    isStartItemDisabled: true,
                    value: null,
                    changeValue: payload =>
                        console.log('change client field value', payload),
                },
            },
        },
        clientComment: {
            name: 'clientComment',
            label: 'Комментарий покупателя',
        },
    },
}
