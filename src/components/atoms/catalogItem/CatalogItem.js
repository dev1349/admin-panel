import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const CatalogItemStyled = createStyled('CatalogItemStyle', 'div', ['darkCatalogItem', 'hoveredCatalogItem'])

const CatalogItem = ({ children, ...rest }) => {
    return <CatalogItemStyled {...rest}>{children}</CatalogItemStyled>
}

export default CatalogItem
