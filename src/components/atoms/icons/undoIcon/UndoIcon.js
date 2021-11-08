import React from 'react'
import { styled } from '@mui/material'
import UndoIcon from '@mui/icons-material/Undo'

const UndoIconStyled = styled(UndoIcon, {
    name: 'UndoIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSUndoIcon = props => {
    return <UndoIconStyled {...props} />
}

export default WSUndoIcon
