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


const TableList = ({
                       firstCheckboxColumn,
                       columnTitle,
                       attributeGroupItems,
                       editAttributeGroup,
                       addRemoveIdGroupForDeleting,
                       idGroupArrayForDeleting,
                       sortAttributeGroup,
                       sortOrder,
                       isAllGroupChecked,
                       checkedAllGroup
                   }) => {
    return (
        <Table>
            <Thead>

                <ColumnHead
                    firstCheckboxColumn={firstCheckboxColumn}
                    columnTitle={columnTitle}
                    sortAttributeGroup={sortAttributeGroup}
                    sortOrder={sortOrder}
                    isAllGroupChecked={isAllGroupChecked}
                    checkedAllGroup={checkedAllGroup}
                />

            </Thead>
            <Tbody>

                {attributeGroupItems.map((item) => (
                        <TableListItem
                            firstCheckboxColumn={firstCheckboxColumn}
                            item={item}
                            key={item.id}
                            editAttributeGroup={editAttributeGroup}
                            addRemoveIdGroupForDeleting={addRemoveIdGroupForDeleting}
                            idGroupArrayForDeleting={idGroupArrayForDeleting}
                        />
                    )
                )}

            </Tbody>
        </Table>
    )
}


export default TableList