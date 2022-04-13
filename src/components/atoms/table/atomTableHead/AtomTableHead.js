import React from 'react'
import { TableHead } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const AtomTableHead = ({ children, ...rest }) => {
    const AtomTableHeadStyled = useStyle('AtomTableHeadStyled', TableHead, null)
    return <AtomTableHeadStyled {...rest}>{children}</AtomTableHeadStyled>
}

export default AtomTableHead
