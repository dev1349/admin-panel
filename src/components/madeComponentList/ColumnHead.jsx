import React from 'react'
import styled, {css} from 'styled-components'


const Tr = styled.tr`
  border: 1px solid lightgray;
`

const Th = styled.th`
  font-size: 14px;
  padding: 5px;
  border: 1px solid lightgray;
  ${props => props.checkbox && css`
    padding: 7px 5px 5px 5px;
    width: 50px;
  `}
  ${props => props.centered && css`
    text-align: center;
  `}
`


const ColumnHead = ({columnTitle}) => {
    return (
        <Tr>

            {columnTitle.map((title, index) => {
                return (
                    <Th key={index}>
                        {title}
                    </Th>
                )
            })}

        </Tr>
    )
}


export default ColumnHead