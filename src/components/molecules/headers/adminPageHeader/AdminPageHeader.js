import React from 'react'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import { createStyled } from '../../../../services/style/createStyled'

const AdminPageHeaderStyled = createStyled('AdminPageHeaderStyle', 'header')

const AdminPageHeader = ({
    icon = null,
    title = 'Page title...',
    buttons = null,
}) => {
    return (
        <AdminPageHeaderStyled>
            <FlexTemplate spaceBetween alignItemsCenter gap10>
                <FlexTemplate alignItemsCenter gap10>
                    {icon}
                    <H1 dialogH1>{title}</H1>
                </FlexTemplate>
                <FlexTemplate alignItemsCenter gap7>
                    {buttons}
                </FlexTemplate>
            </FlexTemplate>
        </AdminPageHeaderStyled>
    )
}

export default AdminPageHeader
