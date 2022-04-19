import React from 'react'
import ListIcon from '@mui/icons-material/List'
import { useStyle } from '../../../../hooks/useStyle'


const WSListIcon = props => {
    const ListIconStyled = useStyle('ListIconStyle', ListIcon)
    return <ListIconStyled {...props} />
}

export default WSListIcon
