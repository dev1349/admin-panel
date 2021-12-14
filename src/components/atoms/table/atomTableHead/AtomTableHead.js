import React from 'react'
import { styled } from '@mui/material/styles'
import { TableHead } from '@mui/material'

const AtomTableHeadStyled = styled(TableHead, {
    name: 'AtomTableHeadStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AtomTableHead = ({ children, ...rest }) => {
    return <AtomTableHeadStyled {...rest}>{children}</AtomTableHeadStyled>
}

export default AtomTableHead
