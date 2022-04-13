import React from 'react'
import { ListItemText } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import ListItemTextStyle from './ListItemTextStyle'


const ListItemTextWS = props => {
    const ListItemTextStyled = useStyle('ListItemTextStyled', ListItemText, ListItemTextStyle,
        'withoutExpandIcon', 'activeItem')
    return <ListItemTextStyled {...props} />
}

export default ListItemTextWS
