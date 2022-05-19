import React from 'react'
import { ListItemText } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const ListItemTextStyled = createStyled('ListItemTextStyle', ListItemText, [
    'dialogItem',
])

const ListItemTextWS = props => {
    return <ListItemTextStyled {...props} />
}

export default ListItemTextWS
