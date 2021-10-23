import React from 'react'
import ButtonsWrapperTemplate from './ButtonsWrapperTemplate'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/ButtonsWrapperTemplate',
    component: ButtonsWrapperTemplate,
}

const Template = args => <ButtonsWrapperTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [<AddIcon key={0} />, <DeleteIcon key={1} />],
}
