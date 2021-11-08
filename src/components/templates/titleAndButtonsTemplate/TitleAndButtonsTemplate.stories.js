import React from 'react'
import TitleAndButtonsTemplate from './TitleAndButtonsTemplate'

export default {
    title: 'templates/TitleAndButtonsTemplate',
    component: TitleAndButtonsTemplate,
}

const Template = args => <TitleAndButtonsTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ backgroundColor: 'yellow' }}>
            Header text
        </div>,
        <div key={1} style={{ backgroundColor: 'green' }}>
            Ok
        </div>,
    ],
}
