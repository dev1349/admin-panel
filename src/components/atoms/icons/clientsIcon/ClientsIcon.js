import React from 'react'
import { styled } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'

const ClientsIconStyled = styled(PeopleIcon, {
    name: 'ClientsIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ClientsIconWS = props => {
    return <ClientsIconStyled {...props} />
}

export default ClientsIconWS
