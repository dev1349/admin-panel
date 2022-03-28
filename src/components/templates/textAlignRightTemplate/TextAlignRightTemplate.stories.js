import React from 'react'
import TextAlignRightTemplate from './TextAlignRightTemplate'

export default {
    title: 'templates/TextAlignRightTemplate',
    component: TextAlignRightTemplate,
}

const Template = args => <TextAlignRightTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [<h1 key={0}>Header text</h1>, <button key={1}>Ok</button>],
}

export const Example2 = Template.bind({})
Example2.args = {
    children: <h1 key={0}>Header text</h1>,
}

export const Example3 = Template.bind({})
Example3.args = {
    children: <h1 key={0}>Header text</h1>,
    topBottomMargin: true,
}
