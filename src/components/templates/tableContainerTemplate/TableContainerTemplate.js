import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TableContainerStyled = createStyled('NovTableContainer', 'div')

const WSTableContainer = ({ children }) => {
    return <TableContainerStyled>{children}</TableContainerStyled>
}

export default WSTableContainer
