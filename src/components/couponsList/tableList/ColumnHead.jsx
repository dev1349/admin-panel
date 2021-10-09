import React from 'react'
import styled, {css} from 'styled-components'
import SortingButtonContainer from './sortingButton/SortingButtonContainer'


const Tr = styled.tr`
  border: 1px solid lightgray;
`

const Th = styled.th`
  font-size: 14px;
  padding: 5px;
  border: 1px solid lightgray;
  
  ${props => props.centered && css`
    text-align: center;
  `}
`


const ColumnHead = ({columnTitle}) => {
    return (
        <Tr>

            {columnTitle.map(({id, title, name, canSort}) => {
                return (
                    <Th key={id}>

                        {canSort ?
                            <SortingButtonContainer
                                title={title}
                                name={name}
                            /> :
                            title}

                    </Th>
                )
            })}

        </Tr>
    )
}


export default ColumnHead