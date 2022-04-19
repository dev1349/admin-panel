import React from 'react'
import { ListItemButton } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const ListItemButtonWS = props => {
    const ListItemButtonStyled = useStyle('ListItemButtonStyle', ListItemButton, 'sub')
    return <ListItemButtonStyled {...props} />
}

export default ListItemButtonWS
