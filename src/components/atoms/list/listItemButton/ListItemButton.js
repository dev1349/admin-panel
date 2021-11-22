import React from 'react'
import { styled } from '@mui/material/styles'
import { ListItemButton } from '@mui/material'

const ListItemButtonStyled = styled(ListItemButton, {
    name: 'ListItemButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListItemButtonWS = props => {
    return <ListItemButtonStyled {...props} />
}

export default ListItemButtonWS
