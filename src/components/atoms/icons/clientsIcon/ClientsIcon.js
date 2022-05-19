import React from 'react'
import PeopleIcon from '@mui/icons-material/People'
import { createStyled } from '../../../../services/style/createStyled'

const ClientsIconStyled = createStyled('ClientsIconStyle', PeopleIcon)

const ClientsIconWS = props => {
    return <ClientsIconStyled {...props} />
}

export default ClientsIconWS
