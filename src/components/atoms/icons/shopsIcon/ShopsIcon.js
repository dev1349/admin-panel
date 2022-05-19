import React from 'react'
import Shop2Icon from '@mui/icons-material/Shop2'
import { createStyled } from '../../../../services/style/createStyled'

const ShopsIconStyled = createStyled('ShopsIconStyle', Shop2Icon)

const ShopsIconWS = props => {
    return <ShopsIconStyled {...props} />
}

export default ShopsIconWS
