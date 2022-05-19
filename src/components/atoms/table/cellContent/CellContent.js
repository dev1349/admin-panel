import React from 'react'
import { Box } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const CellContentStyled = createStyled('CellContentStyle', Box)

const CellContent = ({ children, ...rest }) => {
    return (
        <CellContentStyled component={'span'} {...rest}>
            {children}
        </CellContentStyled>
    )
}

export default CellContent
