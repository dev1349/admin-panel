import React from 'react'
import Link from './Link'

export default {
    title: 'atoms/Link',
    component: Link,
}

const Template = args => <Link {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    href: 'https://www.google.com',
    children: 'link',
}

export const Example2 = Template.bind({})
Example2.args = {
    href: 'https://www.google.com',
    children: 'link',
    color: 'inherit',
}

export const Example3 = Template.bind({})
Example3.args = {
    href: 'https://www.google.com',
    children: 'link',
    color: 'inherit',
    underline: 'none',
}

export const Example4 = Template.bind({})
Example4.args = {
    href: 'https://www.google.com',
    children: 'link',
    color: 'inherit',
    underline: 'hover',
}
