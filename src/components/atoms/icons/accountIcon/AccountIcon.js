import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { createStyled } from '../../../../services/style/createStyled'

const AccountIconStyled = createStyled('AccountIconStyle', AccountBoxIcon)

const AccountIconWS = props => {
    return <AccountIconStyled {...props} />
}

export default AccountIconWS
