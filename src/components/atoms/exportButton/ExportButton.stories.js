import React from 'react'
import ExportButton from './ExportButton'

export default {
    title: 'atoms/ExportButton',
    component: ExportButton,
}

const Template = args => <ExportButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Экспорт данных',
    fileName: 'data',
    tableList: [
        {
            name: 1,
            surname: 11,
        },
        {
            name: 2,
            surname: 22,
        },
    ],
    tableHeader: ['NAME', 'SURNAME'],
}

export const Example2 = Template.bind({})
Example2.args = {
    tableList: [
        {
            name: 1,
            surname: 11,
        },
        {
            name: 2,
            surname: 22,
        },
    ],
}

export const Example3 = Template.bind({})
Example3.args = {}
