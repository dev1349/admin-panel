import React from 'react'
import Img from './Img'

export default {
    title: 'atoms/img',
    component: Img,
}

const Template = args => <Img {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    path: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
    altText: 'logo',
}

export const Example2 = Template.bind({})
Example2.args = {
    path: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
    altText: 'logo',
    logo: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    path: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
    altText: 'logo',
    width: '100px',
}

export const Example4 = Template.bind({})
Example4.args = {
    path: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
    altText: 'logo',
    block: true,
}
