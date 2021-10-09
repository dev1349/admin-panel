import React from 'react'
import {RowTmp} from './RowTmp'

export default {
    title: 'templates/RowTmp',
    component: RowTmp
}

const Template = (args) => <RowTmp {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div style={{border: "1px solid black"}}>el1</div>,
        <div style={{border: "1px solid black"}}>el2</div>,
        <div style={{border: "1px solid black"}}>el3</div>
    ]
}
