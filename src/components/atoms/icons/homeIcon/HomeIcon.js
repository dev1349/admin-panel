import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { useStyle } from '../../../../hooks/useStyle'


const HomeIconWS = props => {
    const HomeIconStyled = useStyle('HomeIconStyled', HomeIcon, null)
    return <HomeIconStyled {...props} />
}

export default HomeIconWS
