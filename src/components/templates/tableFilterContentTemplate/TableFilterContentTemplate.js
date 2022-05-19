import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TableFilterContentTemplateStyled = createStyled(
    'TableFilterContentTemplateStyle',
    'div'
)

const TableFilterContentTemplate = ({ children }) => {
    return (
        <TableFilterContentTemplateStyled>
            {children}
        </TableFilterContentTemplateStyled>
    )
}

export default TableFilterContentTemplate
