import React, { useEffect, useState } from 'react'
import CharacteristicSets from '../../organisms/characteristicSets/CharacteristicSets'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCharacteristicSetsFetchStatus,
    deleteCharacteristicSets,
    getAllCharacteristicSets,
    getCharacteristicSets,
    getCharacteristicSetsFetchStatus,
    getOrder,
    getOrderBy,
    setOrder,
    setOrderBy,
} from '../../../reducers/characteristicSetsSlice'
import headLines from './headLines'
import { useHistory } from 'react-router-dom'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import Loader from '../../molecules/loader/Loader'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import SetIcon from '../../atoms/icons/setIcon/SetIcon'

const CharacteristicSetsPage = () => {
    const characteristicSets = useSelector(getCharacteristicSets)

    const [selectedCharacteristicSets, setSelectedCharacteristicSets] = useState([])

    const handleSelectCharacteristicSet = id => () => {
        const index = selectedCharacteristicSets.findIndex(characteristicSetId => characteristicSetId === id)
        if (index === -1) {
            setSelectedCharacteristicSets(prev => [...prev, id])
        } else {
            setSelectedCharacteristicSets(prev => [...prev.filter(characteristicSetId => characteristicSetId !== id)])
        }
    }

    const isIndeterminate = selectedCharacteristicSets.length > 0 && selectedCharacteristicSets.length < characteristicSets.length

    const isChecked = selectedCharacteristicSets.length > 0 && selectedCharacteristicSets.length === characteristicSets.length

    const handleSelectAllCharacteristic = () => {
        if (isChecked) {
            setSelectedCharacteristicSets([])
            return
        }
        setSelectedCharacteristicSets([...characteristicSets.map(characteristicSet => characteristicSet.id)])
    }

    const order = useSelector(getOrder)

    const orderBy = useSelector(getOrderBy)

    const dispatch = useDispatch()

    const handleRequestSort = property => () => {
        const isAsc = orderBy === property && order === 'asc'
        dispatch(setOrder(isAsc ? 'desc' : 'asc'))
        dispatch(setOrderBy(property))
    }

    const history = useHistory()

    const handleEditCharacteristicSet = id => () => history.push(`/editCharacteristicSet/${id}`)

    const characteristicSetsFetchStatus = useSelector(getCharacteristicSetsFetchStatus)

    const isPending = characteristicSetsFetchStatus === 'pending'

    const isSeverError = characteristicSetsFetchStatus === 'error'

    const isAddEditButtonDisabled = isPending

    useEffect(() => {
        dispatch(getAllCharacteristicSets())
    }, [getAllCharacteristicSets])

    const handleAddNewCharacteristicSet = () => history.push('/addCharacteristicSet')

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    const handleDeleteCharacteristicSets = () => {
        const unselectCharacteristicSets = id => {
            setSelectedCharacteristicSets(prev => [...prev.filter(characteristicSetId => characteristicSetId !== id)])
        }
        dispatch(deleteCharacteristicSets(selectedCharacteristicSets, unselectCharacteristicSets))
        handleCloseDeleteModal()
    }

    const handleCloseServerErrorModal = () => {
        dispatch(changeCharacteristicSetsFetchStatus('idle'))
        dispatch(getAllCharacteristicSets())
    }

    const isAddButtonDisabled = isPending

    const isDeleteButtonDisabled = isPending || selectedCharacteristicSets.length === 0

    return (
        <>
            <CharacteristicSets
                icon={<SetIcon dialogIcon />}
                title={'Наборы характеристик товаров'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleAddNewCharacteristicSet} disabled={isAddButtonDisabled}>
                        <AddIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleOpenDeleteModal} disabled={isDeleteButtonDisabled}>
                        <DeleteIcon />
                    </IconButton>,
                ]}
                characteristicSets={characteristicSets}
                headLines={headLines(isIndeterminate, isChecked, handleSelectAllCharacteristic)}
                onSelect={handleSelectCharacteristicSet}
                selectedCharacteristicSets={selectedCharacteristicSets}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                onEditCharacteristicSet={handleEditCharacteristicSet}
                isEditButtonDisabled={isAddEditButtonDisabled}
            />
            <DeleteModal
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                onYes={handleDeleteCharacteristicSets}
                title={'Подтверждение удаления'}
                description={'Вы действительно хотите удалить этот набор характеристик?'}
            />
            <ErrorModal
                open={isSeverError}
                onClose={handleCloseServerErrorModal}
                title={'Ошибка сервера'}
                description={'Сервер не может выполнить указанную операцию :('}
            />
            {isPending && <Loader dialogProgress />}
        </>
    )
}

export default CharacteristicSetsPage
