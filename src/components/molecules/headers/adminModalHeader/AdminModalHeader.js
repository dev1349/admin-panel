import React from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import { createStyled } from '../../../../services/style/createStyled'

const AdminModalHeaderStyled = createStyled('AdminModalHeaderStyle', 'header')

const AdminModalHeader = ({ title = 'Page title...' }) => {
    return (
        <AdminModalHeaderStyled>
            <H1 dialogH1 textAlignCenter>
                {title}
            </H1>
        </AdminModalHeaderStyled>
    )
}

export default AdminModalHeader
