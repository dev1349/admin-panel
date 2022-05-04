import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const TableFilterContentTemplate = ({ children }) => {
    const TableFilterContentTemplateStyled = useStyle('TableFilterContentTemplateStyle', 'div')
    return (
        <TableFilterContentTemplateStyled>
            {children}
        </TableFilterContentTemplateStyled>
    )
}

export default TableFilterContentTemplate
