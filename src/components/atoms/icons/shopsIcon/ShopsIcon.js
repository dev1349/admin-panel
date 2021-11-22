import React from 'react'
import { styled } from '@mui/material'
import Shop2Icon from '@mui/icons-material/Shop2'

const ShopsIconStyled = styled(Shop2Icon, {
    name: 'ShopsIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ShopsIconWS = props => {
    return <ShopsIconStyled {...props} />
}

export default ShopsIconWS
