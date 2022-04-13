import React from 'react'
import PeopleIcon from '@mui/icons-material/People'
import { useStyle } from '../../../../hooks/useStyle'


const ClientsIconWS = props => {
    const ClientsIconStyled = useStyle('ClientsIconStyled', PeopleIcon, null)
    return <ClientsIconStyled {...props} />
}

export default ClientsIconWS
