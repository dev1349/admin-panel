import React from 'react'
import styled from 'styled-components'

export const RowTmp = ({ children }) => {
    return <RowTmpStyle>{children}</RowTmpStyle>
}
//todo mui styled
const RowTmpStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    * {
        margin: 0.5rem;
        width: 100%;
        height: 10rem;
    }
`
