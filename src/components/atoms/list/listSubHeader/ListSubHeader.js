import React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import { createStyled } from '../../../../services/style/createStyled'

const ListSubHeaderStyled = createStyled('ListSubHeaderStyle', ListSubheader)

const ListSubHeaderWS = props => {
    return <ListSubHeaderStyled {...props} />
}

export default ListSubHeaderWS
