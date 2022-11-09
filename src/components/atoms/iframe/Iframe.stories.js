import React from 'react'
import Iframe from './Iframe'

export default {
    title: 'atoms/Iframe',
    component: Iframe,
}

const Template = args => <Iframe {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    src: 'https://www.youtube.com/embed/-WlixDtoPGw',
    title: 'YouTube video player',
    frameBorder: '0',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen: true,
    response: true,
}
