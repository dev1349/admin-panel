import React from 'react'
import { ListItemButton } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const ListItemButtonStyled = createStyled('ListItemButtonStyle', ListItemButton, ['sub', 'dialogItemButton'])

const ListItemButtonWS = props => {
    return <ListItemButtonStyled {...props} />
}

export default ListItemButtonWS
