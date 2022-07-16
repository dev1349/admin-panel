import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardMainStyled = createStyled('CardMainStyle', 'main')

const CardMain = ({ children }) => {
    return <CardMainStyled>{children}</CardMainStyled>
}

export default CardMain
