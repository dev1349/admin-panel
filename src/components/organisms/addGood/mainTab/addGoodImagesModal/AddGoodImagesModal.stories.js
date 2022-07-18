import React from 'react'
import AddGoodImagesModal from './AddGoodImagesModal'
import { BrowserRouter } from 'react-router-dom'
import { SERVER_PATH } from '../../../../../api/apiConstants'

export default {
    title: 'organisms/addGood/AddGoodImagesModal',
    component: AddGoodImagesModal,
}

const Template = args => (
    <BrowserRouter>
        <AddGoodImagesModal {...args} />
    </BrowserRouter>
)

export const AddGoodImagesModalDefault = Template.bind({})
AddGoodImagesModalDefault.args = {
    openAddGoodImagesModal: true,
    closeAddGoodImagesModal: () => console.log('close modal'),
    uploadImageToServer: data => console.log('upload image to server ', data),
    addedImageIds: [0, 1, 3],
    makeImageAsChecked: id => () => console.log('make image as main ', id),
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
    getImagesFromServer: (categoryId, callback) => console.log('get images from server ', categoryId, callback),
    pathToImage: `${SERVER_PATH}/img/`,
}
