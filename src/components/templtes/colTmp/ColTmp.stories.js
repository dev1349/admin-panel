import React from 'react'
import {ColTmp} from './ColTmp'

export default {
    title: 'templates/ColTmp',
    component: ColTmp
}

const Template = (args) => <ColTmp {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div style={{border: "1px solid black"}}>el1</div>,
        <div style={{border: "1px solid black"}}>el2</div>,
        <div style={{border: "1px solid black"}}>el3</div>
    ]
}
