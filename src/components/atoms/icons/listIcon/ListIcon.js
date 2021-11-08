import React from 'react'
import { styled } from '@mui/material'
import ListIcon from '@mui/icons-material/List'

const ListIconStyled = styled(ListIcon, {
    name: 'ListIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSListIcon = props => {
    return <ListIconStyled {...props} />
}

export default WSListIcon
