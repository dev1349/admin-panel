import React from 'react'
import { Select, styled } from '@mui/material'

const SelectStyled = styled(Select, {
    shouldForwardProp: prop => prop !== 'forTable',
    name: 'SelectStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSSelect = ({ children, ...rest }) => {
    return <SelectStyled {...rest}>{children}</SelectStyled>
}

export default WSSelect
