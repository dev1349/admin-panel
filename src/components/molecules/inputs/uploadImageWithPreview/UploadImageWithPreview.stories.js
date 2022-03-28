import React from 'react'
import UploadImageWithPreview from './UploadImageWithPreview'

export default {
    title: 'molecules/inputs/UploadImageWithPreview',
    component: UploadImageWithPreview,
}

const Template = args => <UploadImageWithPreview {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    name: 'image',
    title: 'Загрузить изображение',
    onChange: payload => console.log(payload),
    img: null,
}
