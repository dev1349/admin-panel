import React from 'react'
import ImageBorder from './ImageBorder'

export default {
    title: 'atoms/wrappers/ImageBorder',
    component: ImageBorder,
}

const Template = args => <ImageBorder {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'yellow',
            }}
        />
    ),
}

export const Example2 = Template.bind({})
Example2.args = {
    children: (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'yellow',
            }}
        />
    ),
    noWidth: true,
}
