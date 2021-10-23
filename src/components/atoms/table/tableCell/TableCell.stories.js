import React from 'react'
import Cell from './TableCell'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/table/Cell',
    component: Cell,
}

const Template = args => <Cell {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    align: 'left',
    children: 'Some tableCell`s text',
}

export const Example2 = Template.bind({})
Example2.args = {
    align: 'center',
    width: '400px',
    children: 'Some tableCell`s text',
}

export const Example3 = Template.bind({})
Example3.args = {
    align: 'right',
    width: '400px',
    children: 'Some tableCell`s text',
}
