import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const AdminPageBorderStyled = createStyled('AdminPageBorderStyle', 'div', ['instructionsContentContainer'])

const AdminPageBorder = ({ children, ...rest }) => {
    return <AdminPageBorderStyled {...rest}>{children}</AdminPageBorderStyled>
}

export default AdminPageBorder
