import React from 'react'
import { styled } from '@mui/material/styles'

const RedStarStyled = styled('span', {
    name: 'RedStarStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const RedStar = ({ children, ...rest }) => {
    return <RedStarStyled {...rest}>{children}</RedStarStyled>
}

export default RedStar
