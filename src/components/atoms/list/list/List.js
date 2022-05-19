import React from 'react'
import List from '@mui/material/List'
import { createStyled } from '../../../../services/style/createStyled'

const ListStyled = createStyled('ListStyle', List)

const ListWS = props => {
    return <ListStyled {...props} />
}

export default ListWS
