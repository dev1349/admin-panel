import React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import { useStyle } from '../../../../hooks/useStyle'


const ListSubHeaderWS = props => {
    const ListSubHeaderStyled = useStyle('ListSubHeaderStyled', ListSubheader, null)
    return <ListSubHeaderStyled {...props} />
}

export default ListSubHeaderWS
