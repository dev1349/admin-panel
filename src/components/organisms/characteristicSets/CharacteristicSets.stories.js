import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CharacteristicSets from './CharacteristicSets'
import SetIcon from '../../atoms/icons/setIcon/SetIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import headLines from '../../pages/characteristicSets/headLines'

export default {
    title: 'organisms/CharacteristicSets',
    component: CharacteristicSets,
}

const Template = args => (
    <BrowserRouter>
        <CharacteristicSets {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <SetIcon dialogIcon />,
    title: 'Наборы характеристик товаров',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('add icon click')} disabled={true}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('delete icon click')} disabled={false}>
            <DeleteIcon />
        </IconButton>,
    ],
    characteristicSets: [
        {
            id: 18,
            name: 'set 01',
            characteristics: [],
            characteristicsGroup: [],
        },
        {
            id: 19,
            name: 'set 02',
            characteristics: [],
            characteristicsGroup: [],
        },
        {
            id: 20,
            name: 'set 03',
            characteristics: [],
            characteristicsGroup: [],
        },
    ],
    headLines: headLines(true, false, () => console.log('select all characteristics')),
    onSelect: () => console.log('select set'),
    selectedCharacteristicSets: [18, 20],
    order: 'desc',
    orderBy: 'name',
    onRequestSort: property => () => console.log('sort by ', property),
    onEditCharacteristicSet: () => console.log('edit characteristic set'),
    isEditButtonDisabled: true,
}
