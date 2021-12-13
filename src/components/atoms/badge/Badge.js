import React from 'react'
import { Badge, styled } from '@mui/material'

const BadgeStyled = styled(Badge, {
    name: 'BadgeStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const BadgeWS = ({ children, ...rest }) => {
    return <BadgeStyled {...rest}>{children}</BadgeStyled>
}

export default BadgeWS
