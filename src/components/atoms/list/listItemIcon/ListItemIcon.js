import React from 'react'
import { ListItemIcon } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const ListItemIconStyled = createStyled('ListItemIconStyle', ListItemIcon, ['adminListItemIcon'])

const ListItemIconWS = props => {
    return <ListItemIconStyled {...props} />
}

export default ListItemIconWS
