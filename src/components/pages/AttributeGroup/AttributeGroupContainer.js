import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addedAttributeGroup,
    changeMode,
    deletedAttributeGroup,
    errorInGroupOperation,
    getAllAttributeGroup,
    getAttributeGroupMode,
    getFetchStatus,
    isButtonDisabled,
    isGroupDeletingListEmpty,
    isSaveGroupButtonDisabled,
    removeSelectedAttributesGroup,
    returnToListMode,
    savedEditedAttributeGroup,
    saveGroup,
} from '../../../reducers/attributeGroupSlice'
import AddEditDeleteWrapper from '../../organisms/addEditDeleteWrapper/AddEditDeleteWrapper'
import ListIcon from '../../atoms/icons/listIcon/ListIcon'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import SortingTableContainer from './SortingTableContainer'
import AddEditAttributeGroupContainer from './AddEditAttributeGroupContainer'
import Loader from '../../molecules/loader/Loader'

const AttributeGroupContainer = () => {
    const isAllButtonDisabled = useSelector(isButtonDisabled)
    const isSaveButtonDisabled = useSelector(isSaveGroupButtonDisabled)
    const fetchStatus = useSelector(getFetchStatus)
    const isDeleteButtonDisabled = useSelector(isGroupDeletingListEmpty)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAttributeGroup())
    }, [dispatch])

    const attributeGroupMode = useSelector(getAttributeGroupMode)
    const addNewGroupHandler = () => {
        dispatch(changeMode('add'))
    }
    const returnToListModeHandler = () => {
        dispatch(returnToListMode())
    }
    const saveGroupHandler = () => {
        dispatch(saveGroup())
    }
    const deleteGroupHandler = () => {
        dispatch(removeSelectedAttributesGroup())
    }
    const addedGroupHandler = () => {
        dispatch(addedAttributeGroup())
    }
    const errorInGroupOperationHandler = () => {
        dispatch(errorInGroupOperation())
    }
    const savedEditedGroupHandler = () => {
        dispatch(savedEditedAttributeGroup())
    }
    const deletedGroupHandler = () => {
        dispatch(deletedAttributeGroup())
    }

    return (
        <>
            <AddEditDeleteWrapper
                mode={attributeGroupMode}
                header1Label={'Группы атрибутов'}
                modeData={{
                    list: {
                        label: 'Список групп атрибутов',
                        icon: <ListIcon />,
                        displayedComponent: <SortingTableContainer />,
                    },
                    add: {
                        label: 'Добавление группы атрибутов',
                        icon: <AddIcon />,
                        displayedComponent: <AddEditAttributeGroupContainer />,
                    },
                    edit: {
                        label: 'Редактирование группы атрибутов',
                        icon: <EditIcon />,
                        displayedComponent: <AddEditAttributeGroupContainer />,
                    },
                }}
                toAdd={addNewGroupHandler}
                toReturn={returnToListModeHandler}
                isAllButtonDisabled={isAllButtonDisabled}
                toSave={saveGroupHandler}
                isSaveButtonDisabled={isSaveButtonDisabled}
                toDelete={deleteGroupHandler}
                isDeleteButtonDisabled={isDeleteButtonDisabled}
                fetchStatus={fetchStatus}
                modalData={[
                    {
                        fetchStatus: 'errorGetAllGroup',
                        modalProperties: {
                            modalText:
                                'Ошибка! Невозможно получить список групп атрибутов(',
                            modalType: 'error',
                            action: errorInGroupOperationHandler,
                        },
                    },
                    {
                        fetchStatus: 'successAddGroup',
                        modalProperties: {
                            modalText: 'Вы добавили новую группу!',
                            modalType: 'success',
                            action: addedGroupHandler,
                        },
                    },
                    {
                        fetchStatus: 'errorAddGroup',
                        modalProperties: {
                            modalText: 'Ошибка! Группа не добавлена!',
                            modalType: 'error',
                            action: errorInGroupOperationHandler,
                        },
                    },
                    {
                        fetchStatus: 'successEditGroup',
                        modalProperties: {
                            modalText: 'Вы отредактировали группу!',
                            modalType: 'success',
                            action: savedEditedGroupHandler,
                        },
                    },
                    {
                        fetchStatus: 'errorEditGroup',
                        modalProperties: {
                            modalText: 'Ошибка! Группа не отредактированна!',
                            modalType: 'error',
                            action: errorInGroupOperationHandler,
                        },
                    },
                    {
                        fetchStatus: 'successDeleteGroup',
                        modalProperties: {
                            modalText: 'Выделенная(ые) группа(ы) удалена(ы)!',
                            modalType: 'success',
                            action: deletedGroupHandler,
                        },
                    },
                    {
                        fetchStatus: 'errorDeleteGroup',
                        modalProperties: {
                            modalText: 'Ошибка! Группа(ы) не удалена(ы)!',
                            modalType: 'error',
                            action: errorInGroupOperationHandler,
                        },
                    },
                ]}
            />
            {fetchStatus === 'pending' && <Loader />}
        </>
    )
}

export default AttributeGroupContainer
