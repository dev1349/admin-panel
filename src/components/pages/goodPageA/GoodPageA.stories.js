import React from 'react'
import {GoodPageAStory} from './GoodPageA'

//todo: удалить после перехода на atomic design
export default {
    title: 'pages/GoodPageA',
    component: GoodPageAStory
}

const Template = (args) => <GoodPageAStory {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color1: "red",
    color2: "blue",
    color3: "yellow"
}
