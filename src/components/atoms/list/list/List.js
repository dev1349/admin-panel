import React from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'

const ListStyled = styled(List, {
    name: 'ListStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListWS = props => {
    return <ListStyled {...props} />
}

export default ListWS
