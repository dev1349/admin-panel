import React from 'react'
import styled from 'styled-components'
import TableCell from '@mui/material/TableCell'

const CellStyled = styled(TableCell)``

const MyCell = ({ children, ...rest }) => {
    return <CellStyled {...rest}>{children}</CellStyled>
}

export default MyCell
