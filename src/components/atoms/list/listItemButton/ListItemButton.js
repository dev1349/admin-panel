import React from 'react'
import { ListItemButton } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import ListItemButtonStyle from './ListItemButtonStyle'


const ListItemButtonWS = props => {
    const ListItemButtonStyled = useStyle('ListItemButtonStyled', ListItemButton, ListItemButtonStyle, 'sub')
    return <ListItemButtonStyled {...props} />
}

export default ListItemButtonWS
