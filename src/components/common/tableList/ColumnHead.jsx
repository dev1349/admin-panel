import React from 'react'
import styled, {css} from 'styled-components'
import Button from '../button/Button'


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

const CellContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const CellTitle = styled.span`
  margin-right: 5px;
`


const ColumnHead = ({
                        firstCheckboxColumn,
                        columnTitle,
                        sortAttributeGroup,
                        sortOrder,
                        isAllGroupChecked,
                        checkedAllGroup
                    }) => {
    return (
        <Tr>

            {firstCheckboxColumn && <Th checkbox centered>
                <input
                    type={"checkbox"}
                    checked={isAllGroupChecked}
                    onChange={checkedAllGroup}
                />
            </Th>}

            {columnTitle.map(({id, name, sort}) => {
                return (
                    <Th key={id}>
                        {sort ? (<CellContent>
                            <CellTitle>{name}</CellTitle>
                            <Button
                                icon={(sortOrder === 'none' || sortOrder === 'down') ? '#sort-down' : '#sort-up'}
                                size={10}
                                padding={5}
                                color={'transparent'}
                                onClick={sortAttributeGroup}
                            />
                        </CellContent>) : name}
                    </Th>
                )
            })}

        </Tr>
    )
}


export default ColumnHead