import React from 'react'
import LabeledTextLabels from './LabeledTextLabels'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'

export default {
    title: 'molecules/inputs/LabeledTextLabels',
    component: LabeledTextLabels,
}

const Template = args => <LabeledTextLabels {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someIdValue',
    label: 'Some label text...',
    characteristics: [
        {
            id: 0,
            name: 'name 01',
            characteristicValues: [
                {
                    id: 0,
                    value: 'one',
                },
                {
                    id: 1,
                    value: 'two',
                },
                {
                    id: 2,
                    value: 'three',
                },
                {
                    id: 3,
                    value: 'four',
                },
            ],
        },
        {
            id: 1,
            name: 'name 02',
            characteristicValues: [
                {
                    id: 0,
                    value: 'one',
                },
                {
                    id: 1,
                    value: 'two',
                },
                {
                    id: 2,
                    value: 'three',
                },
                {
                    id: 3,
                    value: 'four',
                },
            ],
        },
        {
            id: 2,
            name: 'name 03',
            characteristicValues: [
                {
                    id: 0,
                    value: 'one',
                },
                {
                    id: 1,
                    value: 'two',
                },
                {
                    id: 2,
                    value: 'three',
                },
                {
                    id: 3,
                    value: 'four',
                },
            ],
        },
    ],
    buttonText: 'Button text',
    buttonIcon: <AddIcon />,
    onClick: () => console.log('button click'),
    characteristicValuesLength: 20,
}
