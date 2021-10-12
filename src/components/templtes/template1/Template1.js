import React from 'react'
import styled from 'styled-components'
import { ColTmp } from '../colTmp/ColTmp'
import { RowTmp } from '../rowTmp/RowTmp'

//todo: удалить после перехода на atomic design
export const Template1 = ({ children }) => {
    return (
        <Template1Style>
            <ColTmp>
                {children[0]}
                <RowTmp>
                    {children[1]}
                    {children[2]}
                </RowTmp>
            </ColTmp>
        </Template1Style>
    )
}

const Template1Style = styled.div`
    color: ${props => props.theme.field};
`
