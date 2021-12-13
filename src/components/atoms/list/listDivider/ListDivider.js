import React from 'react'
import { styled } from '@mui/material/styles'
import { Divider } from '@mui/material'

const ListDividerStyled = styled(Divider, {
    name: 'ListDividerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListDivider = props => {
    return <ListDividerStyled {...props} />
}

export default ListDivider
