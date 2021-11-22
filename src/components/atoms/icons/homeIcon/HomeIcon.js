import React from 'react'
import { styled } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

const HomeIconStyled = styled(HomeIcon, {
    name: 'HomeIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const HomeIconWS = props => {
    return <HomeIconStyled {...props} />
}

export default HomeIconWS
