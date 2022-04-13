import React from 'react'
import ListIcon from '@mui/icons-material/List'
import { useStyle } from '../../../../hooks/useStyle'


const WSListIcon = props => {
    const ListIconStyled = useStyle('ListIconStyled', ListIcon, null)
    return <ListIconStyled {...props} />
}

export default WSListIcon
