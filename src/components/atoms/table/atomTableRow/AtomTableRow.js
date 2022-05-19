import React from 'react'
import { TableRow } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const AtomTableRowStyled = createStyled('AtomTableRowStyle', TableRow)

const AtomTableRow = ({ children, ...rest }) => {
    return <AtomTableRowStyled {...rest}>{children}</AtomTableRowStyled>
}

export default AtomTableRow
