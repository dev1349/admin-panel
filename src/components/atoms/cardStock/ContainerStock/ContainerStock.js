import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const ContainerStockStyled = createStyled('ContainerStockStyle', 'div')

const ContainerStock = ({ children }) => {
    return <ContainerStockStyled>{children}</ContainerStockStyled>
}

export default ContainerStock
