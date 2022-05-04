import React from 'react'
import { ListItemText } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const ListItemTextWS = props => {
    const ListItemTextStyled = useStyle('ListItemTextStyle', ListItemText,
        ['withoutExpandIcon', 'activeItem'])
    return <ListItemTextStyled {...props} />
}

export default ListItemTextWS
