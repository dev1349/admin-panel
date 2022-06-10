import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import Characteristics from '../../organisms/characteristics/Characteristics'
import { useDispatch, useSelector } from 'react-redux'
import {
    closeServerErrorModal,
    deleteCharacteristic,
    getAllCharacteristics,
    getCharacteristics,
    getGetAllCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    getIsServerError,
    getOrder,
    getOrderBy,
    setOrder,
    setOrderBy,
} from '../../../reducers/characteristicsSlice'
import { useHistory } from 'react-router-dom'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import headLines from './headLines'
import CharacteristicIcon from '../../atoms/icons/characteristicIcon/CharacteristicIcon'

const CharacteristicsPage = () => {
    const characteristics = useSelector(getCharacteristics)

    const [selectedCharacteristics, setSelectedCharacteristics] = useState([])

    const handleSelectCharacteristic = id => () => {
        const index = selectedCharacteristics.findIndex(characteristicId => characteristicId === id)
        if (index === -1) {
            setSelectedCharacteristics(prev => [...prev, id])
        } else {
            setSelectedCharacteristics(prev => [...prev.filter(characteristicId => characteristicId !== id)])
        }
    }

    const isIndeterminate = selectedCharacteristics.length > 0 && selectedCharacteristics.length < characteristics.length

    const isChecked = selectedCharacteristics.length > 0 && selectedCharacteristics.length === characteristics.length

    const handleSelectAllCharacteristic = () => {
        if (isChecked) {
            setSelectedCharacteristics([])
            return
        }
        setSelectedCharacteristics([...characteristics.map(characteristic => characteristic.id)])
    }

    const getAllCharacteristicsFetchStatus = useSelector(getGetAllCharacteristicsFetchStatus)

    const getPostPutDeleteCharacteristicsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicsFetchStatus)

    const isPending = getAllCharacteristicsFetchStatus === 'pending' || getPostPutDeleteCharacteristicsFetchStatus === 'pending'

    const isDeleteButtonDisabled = selectedCharacteristics.length === 0 || isPending

    const dispatch = useDispatch()

    const handleDeleteCharacteristics = () => {
        const unselectCharacteristic = id => {
            setSelectedCharacteristics(prev => [...prev.filter(characteristicId => characteristicId !== id)])
        }
        dispatch(deleteCharacteristic(selectedCharacteristics, unselectCharacteristic))
        handleCloseDeleteModal()
    }

    const order = useSelector(getOrder)

    const orderBy = useSelector(getOrderBy)

    const handleRequestSort = property => () => {
        const isAsc = orderBy === property && order === 'asc'
        dispatch(setOrder(isAsc ? 'desc' : 'asc'))
        dispatch(setOrderBy(property))
    }

    const history = useHistory()

    const handleAddNewCharacteristic = () => history.push('/addCharacteristic')

    const handleEditCharacteristic = id => () => history.push(`/editCharacteristic/${id}`)

    useEffect(() => {
        if (getAllCharacteristicsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristics())
    }, [getAllCharacteristicsFetchStatus, dispatch, getAllCharacteristics])

    const isServerError = useSelector(getIsServerError)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
    }

    const isAddEditButtonDisabled = isPending

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    return (
        <>
            <Characteristics
                icon={<CharacteristicIcon dialogIcon />}
                title={'Характеристики товаров'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleAddNewCharacteristic} disabled={isAddEditButtonDisabled}>
                        <AddIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleOpenDeleteModal} disabled={isDeleteButtonDisabled}>
                        <DeleteIcon />
                    </IconButton>,
                ]}
                characteristics={characteristics}
                headLines={headLines(isIndeterminate, isChecked, handleSelectAllCharacteristic)}
                onSelect={handleSelectCharacteristic}
                selectedCharacteristics={selectedCharacteristics}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                onEditCharacteristic={handleEditCharacteristic}
                isEditButtonDisabled={isAddEditButtonDisabled}
            />

            <DeleteModal
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                onYes={handleDeleteCharacteristics}
                title={'Подтверждение удаления'}
                description={'Вы действительно хотите удалить эту категорию?'}
            />
            <ErrorModal
                open={isServerError}
                onClose={handleCloseServerErrorModal}
                title={'Ошибка сервера'}
                description={'Сервер не может выполнить указанную операцию :('}
            />
            {isPending && <Loader dialogProgress />}
        </>
    )
}

export default CharacteristicsPage
