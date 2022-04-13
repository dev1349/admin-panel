import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import CellContentStyle from './CellContentStyle'


const CellContent = ({ children, ...rest }) => {
    const CellContentStyled = useStyle('CellContentStyled', Box, CellContentStyle)
    return (
        <CellContentStyled component={'span'} {...rest}>
            {children}
        </CellContentStyled>
    )
}

export default CellContent
