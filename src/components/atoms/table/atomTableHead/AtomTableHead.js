import React from 'react'
import { TableHead } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const AtomTableHeadStyled = createStyled('AtomTableHeadStyle', TableHead)

const AtomTableHead = ({ children, ...rest }) => {
    return <AtomTableHeadStyled {...rest}>{children}</AtomTableHeadStyled>
}

export default AtomTableHead
