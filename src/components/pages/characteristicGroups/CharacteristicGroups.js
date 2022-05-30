import React, { useEffect, useState } from 'react'
import ViewListIcon from '../../atoms/icons/viewListIcon/ViewListIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
    closeServerErrorModal,
    deleteCharacteristicGroup,
    getAllCharacteristicGroups,
    getCharacteristicGroups,
    getGetAllCharacteristicGroupsFetchStatus,
    getGetPostPutDeleteCharacteristicGroupsFetchStatus,
    getIsServerError,
    getOrder,
    getOrderBy,
} from '../../../reducers/characteristicGroupsSlice'
import CharacteristicGroups from '../../organisms/characteristicGroups/CharacteristicGroups'
import { setOrder, setOrderBy } from '../../../reducers/characteristicGroupsSlice'
import { useHistory } from 'react-router-dom'
import Loader from '../../molecules/loader/Loader'
import headLines from './headLines'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import ServerErrorModal from '../../molecules/modals/serverErrorModal/ServerErrorModal'

const CharacteristicGroupsPage = () => {
    const getAllCharacteristicGroupsFetchStatus = useSelector(getGetAllCharacteristicGroupsFetchStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (getAllCharacteristicGroupsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristicGroups())
    }, [getAllCharacteristicGroupsFetchStatus, dispatch, getAllCharacteristicGroups])

    const getPostPutDeleteCharacteristicGroupsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicGroupsFetchStatus)

    const isPending = getAllCharacteristicGroupsFetchStatus === 'pending' || getPostPutDeleteCharacteristicGroupsFetchStatus === 'pending'

    const isAddEditButtonDisabled = isPending

    const [selectedCharacteristicGroups, setSelectedCharacteristicGroups] = useState([])

    const isDeleteButtonDisabled = selectedCharacteristicGroups.length === 0 || isPending

    const characteristicGroups = useSelector(getCharacteristicGroups)

    const isIndeterminate = selectedCharacteristicGroups.length > 0 && selectedCharacteristicGroups.length < characteristicGroups.length

    const isChecked = selectedCharacteristicGroups.length > 0 && selectedCharacteristicGroups.length === characteristicGroups.length

    const handleSelectAllCharacteristic = () => {
        if (isChecked) {
            setSelectedCharacteristicGroups([])
            return
        }
        setSelectedCharacteristicGroups([...characteristicGroups.map(characteristicGroup => characteristicGroup.id)])
    }

    const order = useSelector(getOrder)

    const orderBy = useSelector(getOrderBy)

    const handleRequestSort = property => () => {
        const isAsc = orderBy === property && order === 'asc'
        dispatch(setOrder(isAsc ? 'desc' : 'asc'))
        dispatch(setOrderBy(property))
    }

    const history = useHistory()

    const handleAddNewCharacteristicGroup = () => history.push('/addCharacteristicGroup')

    const handleEditCharacteristicGroup = id => () => history.push(`/editCharacteristicGroup/${id}`)

    const handleSelectCharacteristicGroups = id => () => {
        const index = selectedCharacteristicGroups.findIndex(characteristicGroupId => characteristicGroupId === id)
        if (index === -1) {
            setSelectedCharacteristicGroups(prev => [...prev, id])
        } else {
            setSelectedCharacteristicGroups(prev => {
                let copyPrev = [...prev]
                copyPrev.splice(index, 1)
                return copyPrev
            })
        }
    }

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    const isServerError = useSelector(getIsServerError)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
    }

    const handleDeleteCharacteristicGroups = () => {
        const unselectCharacteristicGroup = id => {
            setSelectedCharacteristicGroups(prev => [...prev.filter(characteristicGroupId => characteristicGroupId !== id)])
        }
        dispatch(deleteCharacteristicGroup(selectedCharacteristicGroups, unselectCharacteristicGroup))
        handleCloseDeleteModal()
    }

    return (
        <>
            <CharacteristicGroups
                icon={<ViewListIcon dialogIcon />}
                title={'Группы характеристик'}
                buttons={[
                    <IconButton
                        key={0}
                        dialogButton
                        disableRipple
                        onClick={handleAddNewCharacteristicGroup}
                        disabled={isAddEditButtonDisabled}
                    >
                        <AddIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleOpenDeleteModal} disabled={isDeleteButtonDisabled}>
                        <DeleteIcon />
                    </IconButton>,
                ]}
                characteristicGroups={characteristicGroups}
                headLines={headLines(isIndeterminate, isChecked, handleSelectAllCharacteristic)}
                onSelect={handleSelectCharacteristicGroups}
                selectedCharacteristicGroups={selectedCharacteristicGroups}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                onEditCharacteristicGroup={handleEditCharacteristicGroup}
            />
            <DeleteModal
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                onYes={handleDeleteCharacteristicGroups}
                title={'Подтверждение удаления'}
                description={'Вы действительно хотите удалить эту категорию?'}
            />
            <ServerErrorModal
                open={isServerError}
                onClose={handleCloseServerErrorModal}
                title={'Ошибка сервера'}
                description={'Сервер не может выполнить указанную операцию :('}
            />
            {isPending && <Loader dialogProgress />}
        </>
    )
}

export default CharacteristicGroupsPage
