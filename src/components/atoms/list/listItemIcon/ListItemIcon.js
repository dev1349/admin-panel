import React from 'react'
import { ListItemIcon } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import ListItemIconStyle from './ListItemIconStyle'


const ListItemIconWS = props => {
    const ListItemIconStyled = useStyle('ListItemIconStyled', ListItemIcon, ListItemIconStyle)
    return <ListItemIconStyled {...props} />
}

export default ListItemIconWS
