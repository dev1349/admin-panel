import React from 'react'
import TableList from './tableList/TableList'
import ContainerWithHead from '../ContainerWithHead'


const AttributeGroupList = ({
                                attributeGroupItems,
                                editAttributeGroup,
                                addRemoveIdGroupForDeleting,
                                idGroupArrayForDeleting,
                                sortAttributeGroup,
                                sortOrderGroupName,
                                isAllGroupChecked,
                                checkedAllGroup,
                                isAttributeGroupListEmpty
                            }) => {
    return (
        <ContainerWithHead
            icon={'#list'}
            size={12}
            title={'Список групп атрибутов'}
        >
            {!isAttributeGroupListEmpty ? <TableList
                columnTitle={[
                    {
                        id: 0,
                        name: 'Название группы',
                        sort: true,
                    },
                    {
                        id: 1,
                        name: 'Порядок сортировки',
                        sort: false,
                    },
                    {
                        id: 2,
                        name: 'Действие',
                        sort: false,
                    },
                ]}
                attributeGroupItems={attributeGroupItems}
                editAttributeGroup={editAttributeGroup}
                addRemoveIdGroupForDeleting={addRemoveIdGroupForDeleting}
                idGroupArrayForDeleting={idGroupArrayForDeleting}
                sortAttributeGroup={sortAttributeGroup}
                sortOrder={sortOrderGroupName}
                isAllGroupChecked={isAllGroupChecked}
                checkedAllGroup={checkedAllGroup}
            /> : <div>Список групп атрибутов пуст!</div>}
        </ContainerWithHead>
    )
}


export default AttributeGroupList