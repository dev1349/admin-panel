import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../../services/style/createStyled'

const H1Styled = createStyled('H1Style', Typography, ['fs', 'dialogH1', 'textAlignCenter', 'megaMenuHeader'])

const H1 = ({ children, ...rest }) => {
    return (
        <H1Styled component={'h1'} {...rest}>
            {children}
        </H1Styled>
    )
}

export default H1
