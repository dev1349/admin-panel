import React from 'react'
import { styled } from '@mui/material'

const TableFilterContentTemplateStyled = styled('div', {
    name: 'TableFilterContentTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TableFilterContentTemplate = ({ children }) => {
    return (
        <TableFilterContentTemplateStyled>
            {children}
        </TableFilterContentTemplateStyled>
    )
}

export default TableFilterContentTemplate
