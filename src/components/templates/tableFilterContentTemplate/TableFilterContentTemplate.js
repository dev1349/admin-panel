import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import TableFilterContentTemplateStyle from './TableFilterContentTemplateStyle'


const TableFilterContentTemplate = ({ children }) => {
    const TableFilterContentTemplateStyled = useStyle('TableFilterContentTemplateStyled', 'div', TableFilterContentTemplateStyle)
    return (
        <TableFilterContentTemplateStyled>
            {children}
        </TableFilterContentTemplateStyled>
    )
}

export default TableFilterContentTemplate
