import React from 'react'
import AddGood from './AddGood'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import MainTab from './mainTab/MainTab'
import CharacteristicsTab from './characteristicsTab/CharacteristicsTab'
import CategoryMock from '../../../mock/categoryMockForStorybook'
import { BrowserRouter } from 'react-router-dom'
import { SERVER_PATH } from '../../../api/apiConstants'

export default {
    title: 'organisms/addGood/AddGood',
    component: AddGood,
}

const Template = args => (
    <BrowserRouter>
        <AddGood {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon dialogIcon />,
    title: 'Добавить товар',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('click to undo button')} disabled={true}>
            <UndoIcon dialogIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('click to save button')} disabled={false}>
            <SaveIcon dialogIcon />
        </IconButton>,
    ],
    urlPathToAddGoodPage: '/addGood',
    activeTabLink: '',
    tabs: [
        {
            id: 0,
            label: 'Основные',
            link: '',
            tabPanel: (
                <MainTab
                    goodProperties={{
                        name: null,
                        description: null,
                        goodState: null,
                        price: null,
                        discountPrice: null,
                        amount: null,
                        category: null,
                        images: null,
                    }}
                    changeGoodProperties={payload => console.log('change good properties ', payload)}
                    goodStateItems={[
                        { id: 0, label: 'В наличии', value: 'IN_STOCK' },
                        { id: 1, label: 'Нет в наличии', value: 'NOT_IN_STOCK' },
                        { id: 2, label: 'Под заказ', value: 'UNDER_THE_ORDER' },
                        { id: 3, label: 'Ожидается поступление', value: 'DELIVERY_IS_EXPECTED' },
                        { id: 4, label: 'Заканчивается', value: 'IS_RUNNING_OUT' },
                    ]}
                    uploadImageToServer={data => console.log('upload image to server ', data)}
                    addImageToGood={id => () => console.log('add image to good ', id)}
                    deleteImageFromGood={(id, isMain) => () => console.log('delete image from good ', id, isMain)}
                    makeImageAsMain={id => () => console.log('make image as main ', id)}
                    images={[
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
                    ]}
                    getImagesFromServer={(categoryId, callback) => console.log('get images from server ', categoryId, callback)}
                    pathToImage={`${SERVER_PATH}/img/`}
                />
            ),
        },
        {
            id: 1,
            label: 'Характеристики',
            link: 'characteristics',
            tabPanel: (
                <CharacteristicsTab
                    goodProperties={{
                        name: null,
                        description: null,
                        goodState: null,
                        price: null,
                        discountPrice: null,
                        amount: null,
                        category: null,
                        images: null,
                    }}
                    changeGoodProperties={payload => console.log('change good properties ', payload)}
                    categories={CategoryMock}
                    isPending={false}
                    setValuesFromCharacteristicSelects={payload => console.log('set values from characteristicSelects ', payload)}
                    valuesFromCharacteristicSelects={{}}
                    activeCharacteristic={null}
                    setActiveCharacteristic={payload => console.log('set active characteristic ', payload)}
                    saveCharacteristicNewValues={characteristic =>
                        console.log('save characteristics new values to server ', characteristic)
                    }
                    characteristicGetGetPostPutDeleteFetchStatus={'idle'}
                    getCategoryFromServer={(categoryId, callback) => console.log('get images from server ', categoryId, callback)}
                />
            ),
        },
    ],
}
