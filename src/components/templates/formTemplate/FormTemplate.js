import React from 'react'
import styled from 'styled-components'
import { ColTmp } from '../colTmp/ColTmp'
import { RowTmp } from '../rowTmp/RowTmp'

//todo: удалить после перехода на atomic design
export const FormTemplate = ({ children }) => {
    return (
        <FormTemplateStyle>
            <ColTmp>
                {children[0]}
                <RowTmp>
                    {children[1]}
                    {children[2]}
                </RowTmp>
            </ColTmp>
        </FormTemplateStyle>
    )
}

const FormTemplateStyle = styled.div`
    color: ${props => props.theme.field};
`
