import React from 'react'
import Shop2Icon from '@mui/icons-material/Shop2'
import { useStyle } from '../../../../hooks/useStyle'


const ShopsIconWS = props => {
    const ShopsIconStyled = useStyle('ShopsIconStyled', Shop2Icon, null)
    return <ShopsIconStyled {...props} />
}

export default ShopsIconWS
