import React from 'react'
import IconTitleTemplate from './IconTitleTemplate'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/IconTitleTemplate',
    component: IconTitleTemplate,
}

const Template = args => <IconTitleTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [<AddIcon key={0} />, 'Some text'],
}
