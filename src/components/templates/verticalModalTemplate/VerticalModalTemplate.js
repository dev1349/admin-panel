import React from 'react'
import Styled from 'styled-components'

const VerticalModalTemplateStyled = Styled.div`
    display: block;
`

const ModalTitleStyled = Styled.div`
    padding: 10px;
`

const ModalButtonStyled = Styled.div`
    text-align: center;
`

const MyVerticalModalTemplate = ({ children, ...rest }) => {
    return (
        <VerticalModalTemplateStyled {...rest}>
            <ModalTitleStyled>{children[0]}</ModalTitleStyled>
            <ModalButtonStyled>{children[1]}</ModalButtonStyled>
        </VerticalModalTemplateStyled>
    )
}

export default MyVerticalModalTemplate
