import React from 'react'
import styled from 'styled-components'
import TableListItem from './TableListItem'
import ColumnHead from './ColumnHead'


const Table = styled.table`
  width: 100%;
  border: 1px solid lightgray;
  border-collapse: collapse;
`

const Thead = styled.thead`
  background-color: lightgray;
`

const Tbody = styled.tbody`
`


const TableList = ({columnTitle, rowItems}) => {

    return (
        <Table>
            <Thead>
                <ColumnHead
                    columnTitle={columnTitle}
                />
            </Thead>
            <Tbody>

                {rowItems.map((item) => (
                        <TableListItem
                            item={item}
                            key={item.id}
                        />
                    )
                )}

            </Tbody>
        </Table>
    )
}


export default TableList