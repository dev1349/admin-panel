import React from 'react'
import { styled } from '@mui/material/styles'
import { TableRow } from '@mui/material'

const AtomTableRowStyled = styled(TableRow, {
    name: 'AtomTableRowStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AtomTableRow = ({ children, ...rest }) => {
    return <AtomTableRowStyled {...rest}>{children}</AtomTableRowStyled>
}

export default AtomTableRow
