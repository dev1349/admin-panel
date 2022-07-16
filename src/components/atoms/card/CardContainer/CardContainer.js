import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardContainerStyled = createStyled('CardContainerStyle', 'article')

const CardContainer = ({ children }) => {
    return <CardContainerStyled>{children}</CardContainerStyled>
}

export default CardContainer
