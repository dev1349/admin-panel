import React from 'react'
import CharacteristicListModal from './AdminModal'
import IconButton from '../../buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'

export default {
    title: 'molecules/modals/CharacteristicListModal',
    component: CharacteristicListModal,
}

const Template = args => <CharacteristicListModal {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    open: true,
    onClose: () => console.log('close modal window'),
    title: 'Характеристики',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('close modal window')} autoFocus>
            <UndoIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('save characteristic set')} disabled={false}>
            <SaveIcon />
        </IconButton>,
    ],
    children: 'Some text...Some text...Some text...Some text...Some text...',
}
