import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const CellContent = ({ children, ...rest }) => {
    const CellContentStyled = useStyle('CellContentStyle', Box)
    return (
        <CellContentStyled component={'span'} {...rest}>
            {children}
        </CellContentStyled>
    )
}

export default CellContent
