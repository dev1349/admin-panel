import React from 'react'
import ImageInImageList from './ImageInImageList'

export default {
    title: 'molecules/ImageInImageList',
    component: ImageInImageList,
}

const Template = args => (
    <div style={{ width: '200px', height: '200px' }}>
        <ImageInImageList {...args} />
    </div>
)

export const ImageInImageListDefault = Template.bind({})
ImageInImageListDefault.args = {
    path: 'https://p4.wallpaperbetter.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg',
    altText: 'come alt image text',
    id: 0,
    deleteImage: id => () => console.log('delete image...', id),
    isChecked: true,
    makeImageAsChecked: id => () => console.log('made image as checked...', id),
}
