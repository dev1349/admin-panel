import React from 'react'
import ImageInServerImageList from './ImageInServerImageList'

export default {
    title: 'molecules/ImageInServerImageList',
    component: ImageInServerImageList,
}

const Template = args => (
    <div style={{ width: '200px', height: '200px' }}>
        <ImageInServerImageList {...args} />
    </div>
)

export const ImageInServerImageListDefault = Template.bind({})
ImageInServerImageListDefault.args = {
    path: 'https://p4.wallpaperbetter.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg',
    altText: 'come alt image text',
    id: 0,
    deleteImage: id => () => console.log('delete image...', id),
    isChecked: true,
    makeImageAsChecked: id => () => console.log('made image as checked...', id),
}
