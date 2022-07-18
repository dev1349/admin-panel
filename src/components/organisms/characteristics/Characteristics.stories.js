import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import Characteristics from './Characteristics'
import ViewListIcon from '../../atoms/icons/viewListIcon/ViewListIcon'
import Checkbox from '../../atoms/inputs/checkbox/Checkbox'

export default {
    title: 'organisms/Characteristics',
    component: Characteristics,
}

const Template = args => (
    <BrowserRouter>
        <Characteristics {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <ViewListIcon dialogIcon />,
    title: 'Характеристики товаров',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('add new characteristics')}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('delete characteristic/s')} disabled={false}>
            <DeleteIcon />
        </IconButton>,
    ],
    characteristics: [
        {
            id: 0,
            name: 'Characteristic 01',
            sortOrder: 0,
            onlyForAdmin: false,
            forFilter: false,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [
                {
                    id: 0,
                    value: 'value 01',
                },
                {
                    id: 1,
                    value: 'value 02',
                },
                {
                    id: 2,
                    value: 'value 03',
                },
                {
                    id: 3,
                    value: 'value 04',
                },
            ],
            creationDate: 1651070902922,
        },
        {
            id: 1,
            name: 'Characteristic 02',
            sortOrder: 1,
            onlyForAdmin: true,
            forFilter: false,
            characteristicGroup: null,
            values: [
                {
                    id: 5,
                    value: 'value 06',
                },
                {
                    id: 6,
                    value: 'value 07',
                },
                {
                    id: 7,
                    value: 'value 08',
                },
                {
                    id: 8,
                    value: 'value 09',
                },
                {
                    id: 15,
                    value: 'value 16',
                },
                {
                    id: 16,
                    value: 'value 17',
                },
            ],
            creationDate: 1651060902922,
        },
        {
            id: 2,
            name: 'Characteristic 03',
            sortOrder: 2,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [],
            creationDate: 1651050902922,
        },
        {
            id: 3,
            name: 'Characteristic 04',
            sortOrder: 3,
            onlyForAdmin: false,
            forFilter: false,
            characteristicGroup: {
                id: 1,
                name: 'GroupName 02',
            },
            values: [
                {
                    id: 9,
                    value: 'value 10',
                },
                {
                    id: 10,
                    value: 'value 11',
                },
                {
                    id: 11,
                    value: 'value 12',
                },
                {
                    id: 12,
                    value: 'value 13',
                },
                {
                    id: 13,
                    value: 'value 14',
                },
                {
                    id: 14,
                    value: 'value 15',
                },
            ],
            creationDate: 1651000902922,
        },
        {
            id: 4,
            name: 'Characteristic 05',
            sortOrder: 4,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 0,
                name: 'GroupName 01',
            },
            values: [],
            creationDate: 1651040802922,
        },
        {
            id: 5,
            name: 'Characteristic 06',
            sortOrder: 5,
            onlyForAdmin: false,
            forFilter: false,
            characteristicGroup: null,
            values: [],
            creationDate: 1650070902922,
        },
        {
            id: 6,
            name: 'Characteristic 07',
            sortOrder: 6,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 1,
                name: 'GroupName 02',
            },
            values: [],
            creationDate: 1650970902922,
        },
        {
            id: 7,
            name: 'Characteristic 08',
            sortOrder: 7,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 1,
                name: 'GroupName 02',
            },
            values: [],
            creationDate: 1650870902922,
        },
        {
            id: 8,
            name: 'Characteristic 09',
            sortOrder: 8,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [],
            creationDate: 1650960902922,
        },
        {
            id: 9,
            name: 'Characteristic 10',
            sortOrder: 9,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [],
            creationDate: 1650950902922,
        },
        {
            id: 10,
            name: 'Characteristic 11',
            sortOrder: 11,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 1,
                name: 'GroupName 02',
            },
            values: [],
            creationDate: 1650970902922,
        },
        {
            id: 11,
            name: 'Characteristic 12',
            sortOrder: 12,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 1,
                name: 'GroupName 02',
            },
            values: [],
            creationDate: 1650870902922,
        },
        {
            id: 12,
            name: 'Characteristic 13',
            sortOrder: 13,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [],
            creationDate: 1650960902922,
        },
        {
            id: 13,
            name: 'Characteristic 14',
            sortOrder: 14,
            onlyForAdmin: false,
            forFilter: true,
            characteristicGroup: {
                id: 2,
                name: 'GroupName 03',
            },
            values: [],
            creationDate: 1650950902922,
        },
    ],
    headLines: [
        {
            id: 0,
            content: (
                <Checkbox
                    dialogCheckbox
                    disableRipple
                    indeterminate={true}
                    checked={false}
                    onChange={() => console.log('change all selected')}
                />
            ),
            name: 'checkbox',
            align: 'left',
            canSort: false,
        },
        {
            id: 1,
            content: 'Название',
            name: 'name',
            align: 'left',
            canSort: true,
        },
        {
            id: 2,
            content: 'Порядок',
            name: 'sortOrder',
            align: 'right',
            canSort: true,
        },
        {
            id: 3,
            content: 'Для админа',
            name: 'onlyForAdmin',
            align: 'center',
            canSort: true,
        },
        {
            id: 4,
            content: 'Для фильтра',
            name: 'forFilter',
            align: 'center',
            canSort: true,
        },
        {
            id: 5,
            content: 'Группа',
            name: 'characteristicGroup.name',
            align: 'left',
            canSort: true,
        },
        {
            id: 6,
            content: 'Значения',
            name: 'values',
            align: 'left',
            canSort: false,
        },
        {
            id: 7,
            content: '',
            align: 'right',
        },
    ],
    onSelect: id => () => console.log('selected ', id),
    selectedCharacteristics: [1, 2, 3],
    order: 'desc',
    orderBy: 'name',
    onRequestSort: property => () => console.log('sort by ', property),
    rowsPerPage: 25,
    page: 0,
    onChangeRowsPerPage: () => console.log('change rows per page'),
    onChangePage: () => console.log('set new current page'),
    onEditCharacteristic: id => () => console.log('edit characteristic ', id),
}
