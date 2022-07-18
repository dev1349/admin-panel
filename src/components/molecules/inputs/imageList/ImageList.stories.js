import React from 'react'
import ImageList from './ImageList'
import { SERVER_PATH } from '../../../../api/apiConstants'

export default {
    title: 'molecules/inputs/ImageList',
    component: ImageList,
}

const Template = args => <ImageList {...args} />

export const ImageListDefault = Template.bind({})
ImageListDefault.args = {
    images: [
        {
            id: 0,
            image: {
                hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
                uploadTime: '2022-07-14T12:02:12.155+00:00',
            },
            isMain: true,
        },
        {
            id: 1,
            image: {
                hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
                uploadTime: '2022-07-14T12:02:12.155+00:00',
            },
            isMain: false,
        },
        {
            id: 2,
            image: {
                hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
                uploadTime: '2022-07-14T12:02:12.155+00:00',
            },
            isMain: false,
        },
    ],
    onAdd: () => console.log('open modal window with images on server...'),
    deleteImage: (id, isMain) => () => console.log('delete image from image list...', id, isMain),
    makeImageAsChecked: id => () => console.log('make image as checked...', id),
    pathToImage: `${SERVER_PATH}/img/`,
}
