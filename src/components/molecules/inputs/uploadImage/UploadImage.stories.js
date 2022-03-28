import React from 'react'
import UploadImage from './UploadImage'

export default {
    title: 'molecules/inputs/UploadImage',
    component: UploadImage,
}

const Template = args => <UploadImage {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    title: 'Загрузить изображение',
    image: null,
    setImage: image => console.log(image),
}
