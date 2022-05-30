import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import CharacteristicGroups from './CharacteristicGroups'
import ViewListIcon from '../../atoms/icons/viewListIcon/ViewListIcon'
import headLines from '../../pages/characteristicGroups/headLines'

export default {
    title: 'organisms/CharacteristicGroups',
    component: CharacteristicGroups,
}

const Template = args => (
    <BrowserRouter>
        <CharacteristicGroups {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    Icon: <ViewListIcon dialogIcon />,
    title: 'Группы характеристик',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('add characteristic group')} disabled={false}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('delete characteristic group')} disabled={false}>
            <DeleteIcon />
        </IconButton>,
    ],
    characteristicGroups: [
        {
            characteristics: [],
            command: null,
            id: 25,
            isAdminOnly: true,
            name: 'Проверка',
            orderNumber: 11,
        },
        {
            characteristics: [],
            command: null,
            id: 21,
            isAdminOnly: false,
            name: 'OurFirstCharGroup2',
            orderNumber: 3,
        },
    ],
    headLines: headLines(true, false, () => console.log('selected')),
    onSelect: () => console.log('on select'),
    selectedCharacteristicGroups: [],
    order: 'asc',
    orderBy: 'name',
    onRequestSort: () => console.log('sort'),
    onEditCharacteristicGroup: id => () => console.log('selected', id),
}
