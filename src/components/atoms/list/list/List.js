import React from 'react'
import List from '@mui/material/List'
import { useStyle } from '../../../../hooks/useStyle'
import ListStyle from './ListStyle'


const ListWS = props => {
    const ListStyled = useStyle('ListStyled', List, ListStyle)
    return <ListStyled {...props} />
}

export default ListWS
