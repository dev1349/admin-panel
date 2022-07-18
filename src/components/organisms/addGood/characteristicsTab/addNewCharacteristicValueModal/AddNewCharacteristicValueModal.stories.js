import React from 'react'
import AddNewCharacteristicValueModal from './AddNewCharacteristicValueModal'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'organisms/addGood/AddNewCharacteristicValueModal',
    component: AddNewCharacteristicValueModal,
}

const Template = args => (
    <BrowserRouter>
        <AddNewCharacteristicValueModal {...args} />
    </BrowserRouter>
)

export const AddNewCharacteristicValueModalDefault = Template.bind({})
AddNewCharacteristicValueModalDefault.args = {
    openAddValueWindow: true,
    closeAddValueWindow: () => console.log('close add value window'),
    activeCharacteristic: {
        id: 127,
        name: '222',
        categoryType: 'WITH_GOODS',
        parentCategory: null,
        subCategories: [],
        characteristicSets: [
            {
                id: 3,
                name: 'Set 03',
                characteristics: [
                    {
                        id: 169,
                        name: 'Characteristic 1001',
                        isAdminOnly: false,
                        isAvailableInFilter: true,
                        orderNumber: 999,
                        characteristicGroup: 29,
                        characteristicValues: [
                            {
                                id: 97,
                                value: 'ggg',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 98,
                                value: 'hhh',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 100,
                                value: 'kkk',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 134,
                                value: 'fff',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 135,
                                value: 'nnn',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 152,
                                value: '555',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 153,
                                value: '666',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 154,
                                value: '222',
                                characteristic: 169,
                                command: null,
                            },
                            {
                                id: 155,
                                value: '777',
                                characteristic: 169,
                                command: null,
                            },
                        ],
                        command: null,
                    },
                ],
                characteristicsGroup: [],
                command: null,
            },
            {
                id: 18,
                name: 'My set',
                characteristics: [
                    {
                        id: 210,
                        name: 'Characteristic 005',
                        isAdminOnly: false,
                        isAvailableInFilter: true,
                        orderNumber: 999,
                        characteristicGroup: 28,
                        characteristicValues: [],
                        command: null,
                    },
                    {
                        id: 208,
                        name: 'Characteristics 003',
                        isAdminOnly: false,
                        isAvailableInFilter: true,
                        orderNumber: 999,
                        characteristicGroup: 32,
                        characteristicValues: [
                            {
                                id: 131,
                                value: 'sumsung',
                                characteristic: 208,
                                command: null,
                            },
                            {
                                id: 132,
                                value: 'sony',
                                characteristic: 208,
                                command: null,
                            },
                            {
                                id: 151,
                                value: 'xiaomy',
                                characteristic: 208,
                                command: null,
                            },
                        ],
                        command: null,
                    },
                ],
                characteristicsGroup: [
                    {
                        id: 1,
                        name: 'Characteristic group 01',
                        orderNumber: 1,
                        isAdminOnly: true,
                        characteristics: [],
                        command: null,
                    },
                    {
                        id: 10,
                        name: 'Characteristic group 005',
                        orderNumber: 100,
                        isAdminOnly: true,
                        characteristics: [
                            {
                                id: 18,
                                name: 'Characteristic 155',
                                isAdminOnly: true,
                                isAvailableInFilter: true,
                                orderNumber: 104,
                                characteristicGroup: 10,
                                characteristicValues: [
                                    {
                                        id: 103,
                                        value: 'aaa',
                                        characteristic: 18,
                                        command: null,
                                    },
                                    {
                                        id: 104,
                                        value: 'sss',
                                        characteristic: 18,
                                        command: null,
                                    },
                                    {
                                        id: 105,
                                        value: 'ddd',
                                        characteristic: 18,
                                        command: null,
                                    },
                                    {
                                        id: 156,
                                        value: 'mmm',
                                        characteristic: 18,
                                        command: null,
                                    },
                                ],
                                command: null,
                            },
                        ],
                        command: null,
                    },
                    {
                        id: 11,
                        name: 'Characteristic group 006',
                        orderNumber: 101,
                        isAdminOnly: true,
                        characteristics: [],
                        command: null,
                    },
                ],
                command: null,
            },
        ],
        command: null,
    },
    saveCharacteristicNewValues: characteristic => console.log('save characteristics new values to server ', characteristic),
}
