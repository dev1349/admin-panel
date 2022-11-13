import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FlexTemplateStyled = createStyled('FlexTemplateStyle', 'div', [
    'alignItemsCenter',
    'justifyContentCenter',
    'spaceBetween',
    'gap10',
    'gap7',
    'justifyContentRight',
    'noWrap',
    'justifyContentLeftSm',
    'directionColumn',
    'paddingTop7',
])

const FlexTemplate = ({ children, ...rest }) => {
    return <FlexTemplateStyled {...rest}>{children}</FlexTemplateStyled>
}

export default FlexTemplate
