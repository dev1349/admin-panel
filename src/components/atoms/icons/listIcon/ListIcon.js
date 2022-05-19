import React from 'react'
import ListIcon from '@mui/icons-material/List'
import { createStyled } from '../../../../services/style/createStyled'

const ListIconStyled = createStyled('ListIconStyle', ListIcon)

const WSListIcon = props => {
    return <ListIconStyled {...props} />
}

export default WSListIcon
