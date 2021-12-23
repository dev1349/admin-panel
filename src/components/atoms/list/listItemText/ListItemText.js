import React from 'react'
import { styled } from '@mui/material/styles'
import { ListItemText } from '@mui/material'

const ListItemTextStyled = styled(ListItemText, {
    shouldForwardProp: prop =>
        prop !== 'withoutExpandIcon' && prop !== 'activeItem',
    name: 'ListItemTextStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListItemTextWS = props => {
    return <ListItemTextStyled {...props} />
}

export default ListItemTextWS
