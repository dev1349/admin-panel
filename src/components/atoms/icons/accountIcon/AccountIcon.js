import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { useStyle } from '../../../../hooks/useStyle'


const AccountIconWS = props => {
    const AccountIconStyled = useStyle('AccountIconStyled', AccountBoxIcon, null)
    return <AccountIconStyled {...props} />
}

export default AccountIconWS
