import React from 'react'
import ImagesListWithUploadToServer from './ImagesListWithUploadToServer'
import { SERVER_PATH } from '../../../../api/apiConstants'

export default {
    title: 'molecules/inputs/ImagesListWithUploadToServer',
    component: ImagesListWithUploadToServer,
}

const Template = args => <ImagesListWithUploadToServer {...args} />

export const ImagesListWithUploadToServerDefault = Template.bind({})
ImagesListWithUploadToServerDefault.args = {
    images: [
        {
            id: 0,
            hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
            uploadTime: '2022-07-14T12:02:12.155+00:00',
        },
        {
            id: 1,
            hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
            uploadTime: '2022-07-14T12:02:12.155+00:00',
        },
        {
            id: 2,
            hashIdImage: 'oK17l2HLzmXYoIH6Ubr0w0j-M0JTY0crXF_kR325XSD7KeCwp6ipCToNkK1SDKa3R2R-Uco8q_AqbknOfwRHMw==',
            uploadTime: '2022-07-14T12:02:12.155+00:00',
        },
    ],
    makeImageAsChecked: id => () => console.log('make image as checked...', id),
    uploadImageToServer: payload => console.log('upload image to server...', payload),
    deleteImage: id => () => console.log('deleting image', id),
    addedImageIds: [0, 1, 2],
    pathToImage: `${SERVER_PATH}/img/`,
    isDeleteButtonDisabled: id => {
        console.log('disabling true', id)
        return true
    },
}
