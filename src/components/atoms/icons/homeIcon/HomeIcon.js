import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { createStyled } from '../../../../services/style/createStyled'

const HomeIconStyled = createStyled('HomeIconStyle', HomeIcon)

const HomeIconWS = props => {
    return <HomeIconStyled {...props} />
}

export default HomeIconWS
