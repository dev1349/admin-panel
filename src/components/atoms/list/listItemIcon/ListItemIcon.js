import React from 'react'
import { styled } from '@mui/material/styles'
import { ListItemIcon } from '@mui/material'

const ListItemIconStyled = styled(ListItemIcon, {
    name: 'ListItemIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListItemIconWS = props => {
    return <ListItemIconStyled {...props} />
}

export default ListItemIconWS
