import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardFooterStyled = createStyled('CardFooterStyle', 'footer')

const CardFooter = ({ children }) => {
    return <CardFooterStyled>{children}</CardFooterStyled>
}

export default CardFooter
