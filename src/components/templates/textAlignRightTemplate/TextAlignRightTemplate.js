import React from 'react'
import styled from 'styled-components'

const TextAlignRightTemplateStyled = styled.div`
    text-align: right;
`

const TextAlignRightTemplate = ({ children, ...rest }) => {
    return (
        <TextAlignRightTemplateStyled {...rest}>
            {children}
        </TextAlignRightTemplateStyled>
    )
}

export default TextAlignRightTemplate
