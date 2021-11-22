import React from 'react'
import { styled } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const AccountIconStyled = styled(AccountBoxIcon, {
    name: 'AccountIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AccountIconWS = props => {
    return <AccountIconStyled {...props} />
}

export default AccountIconWS
