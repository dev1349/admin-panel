import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardTextStyled = createStyled('CardTextStyle', 'div', 'stock')

const CardText = ({ children, stock }) => {
    return <CardTextStyled stock={stock}>{children}</CardTextStyled>
}

export default CardText
