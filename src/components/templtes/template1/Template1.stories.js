import React from 'react'
import {Template1} from './Template1'

export default {
    title: 'templates/Template1',
    component: Template1
}

const Template = (args) => <Template1 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div style={{border: "1px solid black"}}>el1</div>,
        <div style={{border: "1px solid black"}}>el2</div>,
        <div style={{border: "1px solid black"}}>el3</div>
    ]
}
