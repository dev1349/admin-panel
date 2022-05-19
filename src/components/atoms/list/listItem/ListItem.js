import React from 'react'
import { ListItem } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const ListItemStyled = createStyled('ListItemStyle', ListItem, ['dialogItem'])

const ListItemAtom = props => {
    return <ListItemStyled {...props} />
}

export default ListItemAtom
