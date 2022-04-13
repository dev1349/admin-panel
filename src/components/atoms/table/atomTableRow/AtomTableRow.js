import React from 'react'
import { TableRow } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const AtomTableRow = ({ children, ...rest }) => {
    const AtomTableRowStyled = useStyle('AtomTableRowStyled', TableRow, null)
    return <AtomTableRowStyled {...rest}>{children}</AtomTableRowStyled>
}

export default AtomTableRow
