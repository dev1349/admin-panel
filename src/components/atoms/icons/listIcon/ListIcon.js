import React from 'react'
import styled from 'styled-components'
import ListIcon from '@mui/icons-material/List'

const ListIconStyled = styled(ListIcon)``

const MyListIcon = props => {
    return <ListIconStyled {...props} />
}

export default MyListIcon
