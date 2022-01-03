import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TitleBreadcrumbsButtonsTemplate from './TitleBreadcrumbsButtonsTemplate'

export default {
    title: 'templates/TitleBreadcrumbsButtonsTemplate',
    component: TitleBreadcrumbsButtonsTemplate,
}

const Template = args => (
    <BrowserRouter>
        <TitleBreadcrumbsButtonsTemplate {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ backgroundColor: 'yellow' }}>
            Header text
        </div>,
        <div key={1} style={{ backgroundColor: 'green' }}>
            Ok
        </div>,
        <div key={2} style={{ backgroundColor: 'grey' }}>
            text to right
        </div>,
    ],
}
