import React from 'react'
import { styled } from '@mui/material/styles'
import ListSubheader from '@mui/material/ListSubheader'

const ListSubHeaderStyled = styled(ListSubheader, {
    name: 'ListSubHeaderStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ListSubHeaderWS = props => {
    return <ListSubHeaderStyled {...props} />
}

export default ListSubHeaderWS
