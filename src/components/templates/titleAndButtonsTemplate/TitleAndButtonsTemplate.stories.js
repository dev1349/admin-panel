import React from 'react'
import TitleAndButtonsTemplate from './TitleAndButtonsTemplate'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/TitleAndButtonsTemplate',
    component: TitleAndButtonsTemplate,
}

const Template = args => <TitleAndButtonsTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [<h1 key={0}>Header text</h1>, <button key={1}>Ok</button>],
}
