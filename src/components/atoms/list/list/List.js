import React from 'react'
import List from '@mui/material/List'
import { useStyle } from '../../../../hooks/useStyle'


const ListWS = props => {
    const ListStyled = useStyle('ListStyle', List)
    return <ListStyled {...props} />
}

export default ListWS
