import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardContentStyled = createStyled('CardContentStyle', 'div')

const CardContent = ({ children }) => {
    return <CardContentStyled>{children}</CardContentStyled>
}

export default CardContent
