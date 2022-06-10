import React from 'react'
import LabeledTotalLabels from './LabeledTotalLabels'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'

export default {
    title: 'molecules/inputs/LabeledTotalLabels',
    component: LabeledTotalLabels,
}

const Template = args => <LabeledTotalLabels {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'totalCountOfCharacteristicsAndCharacteristicsGroup',
    label: 'Характеристики в наборе',
    totalCount: 15,
    buttonText: 'Добавить группу/характеристику',
    buttonIcon: <AddIcon />,
    onClick: () => console.log('on click'),
}
