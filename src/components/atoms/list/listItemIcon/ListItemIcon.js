import React from 'react'
import { ListItemIcon } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const ListItemIconWS = props => {
    const ListItemIconStyled = useStyle('ListItemIconStyle', ListItemIcon)
    return <ListItemIconStyled {...props} />
}

export default ListItemIconWS
