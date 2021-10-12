import React, { useEffect, useState } from 'react'
import AttributesHeaderContainer from '../attributeHeader/AttributeHeaderContainer'
import AddAttributesButtonContainer from '../attributeHeader/AddAttributeButton/AddAttributeButtonContainer'
import DeleteAttributesButtonContainer from '../attributeHeader/DeleteAttributeButton/DeleteAttributeButtonContainer'
import { AttributesList } from './AttributesList'
import {
    putCheck,
    deleteAttribute,
    getAllAttribute,
    editAttribute,
} from '../../actions/attributeActions'
import EditAttributeContainer from '../editAttribute/EditAttributeContainer'
import AddAttributeContainer from '../addAttribute/AddAttributeContainer'
import ActionAttributeListContainer from './actionAttributeList/ActionAttributeListContainer'
import { useDispatch, useSelector } from 'react-redux'

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config)

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items]
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableItems
    }, [items, sortConfig])

    const requestSort = key => {
        let direction = 'ascending'
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    return { items: sortedItems, requestSort, sortConfig }
}

const AttributesListContainer = () => {
    const dispatch = useDispatch()

    const attribute = useSelector(state => {
        return state.attributes.allAttribute
    })

    useEffect(() => {
        dispatch(getAllAttribute())
    }, [dispatch])

    const [showList, setShowList] = useState(true)
    const [showAddAttribute, setShowAddAttribute] = useState(false)
    const [showEditAttribute, setShowEditAttribute] = useState(false)

    const { items, requestSort, sortConfig } = useSortableData(attribute)
    const getClassNamesFor = name => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }

    const handleDelete = () => {
        attribute.forEach(el => {
            //БАГ?: если `attribute.id` связано с другим столбцом, к примеру
            if (el.status) {
                // attribute_value то удаление не сработает
                dispatch(deleteAttribute(el))
            }
        })
    }

    const handleSetCheckBox = event => {
        //изменение чеков в стейте
        dispatch(putCheck(event.target.id))
    }

    const handleEdit = element => {
        dispatch(editAttribute(element.id))
    }

    const handleShowList = () => {
        setShowAddAttribute(false)
        setShowList(true)
        setShowEditAttribute(false)
    }

    const handleShowAddAttribute = () => {
        setShowAddAttribute(true)
        setShowList(false)
        setShowEditAttribute(false)
    }

    const handleShowEditAttribute = () => {
        setShowAddAttribute(false)
        setShowList(false)
        setShowEditAttribute(true)
    }

    return (
        <div>
            <EditAttributeContainer
                showComp={showEditAttribute ? '' : ' hidden'}
                showList={handleShowList}
            />
            <AddAttributeContainer
                showComp={showAddAttribute ? '' : ' hidden'}
                showList={handleShowList}
            />
            <AttributesHeaderContainer
                firstButton={
                    <AddAttributesButtonContainer
                        handleShowAddAttribute={handleShowAddAttribute}
                    />
                }
                secondButton={
                    <DeleteAttributesButtonContainer
                        handleDelete={handleDelete}
                    />
                }
                title={'Список атрибутов'}
                showComp={showList ? '' : ' hidden'}
            />
            {attribute && (
                <AttributesList
                    showComp={showList ? '' : ' hidden'}
                    attributeData={items}
                    editAttribute={handleEdit}
                    getClassName={getClassNamesFor}
                    sortFunc={requestSort}
                    handleSetCheckBox={handleSetCheckBox}
                    action={
                        <ActionAttributeListContainer
                            handleShowEditAttribute={handleShowEditAttribute}
                        />
                    }
                />
            )}
        </div>
    )
}

export default AttributesListContainer
