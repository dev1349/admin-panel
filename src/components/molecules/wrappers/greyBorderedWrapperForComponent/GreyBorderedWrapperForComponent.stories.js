import React from 'react'
import GreyBorderedWrapperForComponent from './GreyBorderedWrapperForComponent'

export default {
    title: 'molecules/GreyBorderedWrapperForComponent',
    component: GreyBorderedWrapperForComponent,
}

const Template = args => <GreyBorderedWrapperForComponent {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    displayedComponent: <div>Some Component!</div>,
}
