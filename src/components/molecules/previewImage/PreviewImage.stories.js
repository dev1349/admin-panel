import React from 'react'
import PreviewImage from './PreviewImage'

export default {
    title: 'molecules/PreviewImage',
    component: PreviewImage,
}

const Template = args => <PreviewImage {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    alt: 'some alternate text...',
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
}
