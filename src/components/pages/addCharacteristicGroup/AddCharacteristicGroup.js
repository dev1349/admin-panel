import React, { useEffect, useState } from 'react'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeGetAllCharacteristicGroupsFetchStatus,
    changeGetPostPutDeleteCharacteristicGroupsFetchStatus,
    getGetPostPutDeleteCharacteristicGroupsFetchStatus,
    saveNewCharacteristicGroup,
    setOrder,
    setOrderBy,
} from '../../../reducers/characteristicGroupsSlice'
import { useHistory } from 'react-router-dom'
import AddCharacteristicGroup from '../../organisms/addCharacteristicGroup/AddCharacteristicGroup'
import {
    changeGetAllCharacteristicsFetchStatus,
    getAllCharacteristics,
    getGetAllCharacteristicsFetchStatus,
} from '../../../reducers/characteristicsSlice'
import Loader from '../../molecules/loader/Loader'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import {
    changeCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroup,
    getCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroupFromServer,
} from '../../../reducers/characteristicsWithoutGroupSlice'

const AddCharacteristicGroupPage = () => {
    const initialCharacteristicGroupState = {
        name: null,
        orderNumber: 999,
        isAdminOnly: false,
        characteristics: [],
    }
    const [characteristicGroupFieldValues, setCharacteristicGroupFieldValues] = useState(initialCharacteristicGroupState)

    const handleChangeCharacteristicFields = payload => {
        setCharacteristicGroupFieldValues(prev => ({ ...prev, ...payload }))
    }

    const getAllCharacteristicsFetchStatus = useSelector(getGetAllCharacteristicsFetchStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (getAllCharacteristicsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristics())
    }, [getAllCharacteristicsFetchStatus, dispatch, getAllCharacteristics])

    const getPostPutDeleteCharacteristicGroupsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicGroupsFetchStatus)

    const history = useHistory()

    useEffect(() => {
        if (getPostPutDeleteCharacteristicGroupsFetchStatus === 'success') {
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('idle'))
            history.push('/characteristicGroups')
        }
    }, [getPostPutDeleteCharacteristicGroupsFetchStatus, dispatch, history])

    const characteristicIdsInGroup = characteristicGroupFieldValues.characteristics.map(characteristic => characteristic.id)

    const isCharacteristicInGroup = id => characteristicIdsInGroup.includes(id)

    const handleAddRemoveCharacteristic = characteristic => () => {
        if (isCharacteristicInGroup(characteristic.id)) {
            setCharacteristicGroupFieldValues(prev => ({
                ...prev,
                characteristics: [...prev.characteristics.filter(char => char.id !== characteristic.id)],
            }))
            return
        }
        setCharacteristicGroupFieldValues(prev => ({
            ...prev,
            characteristics: [...prev.characteristics, characteristic],
        }))
    }

    const handleGoBack = () => history.goBack()

    const handleSaveNewCharacteristicGroup = () => {
        dispatch(saveNewCharacteristicGroup(characteristicGroupFieldValues))
        dispatch(setOrder('desc'))
        dispatch(setOrderBy(''))
    }

    const [openCharacteristicListModal, setOpenCharacteristicListModal] = useState(false)

    const handleOpenCharacteristicListModal = () => setOpenCharacteristicListModal(true)

    const handleCloseCharacteristicListModal = () => setOpenCharacteristicListModal(false)

    const isPending = getAllCharacteristicsFetchStatus === 'pending' || getPostPutDeleteCharacteristicGroupsFetchStatus === 'pending'

    const isGoBackButtonDisabled = isPending

    const isSaveButtonDisable =
        isPending ||
        characteristicGroupFieldValues.name === null ||
        characteristicGroupFieldValues.name.trim() === '' ||
        characteristicGroupFieldValues.orderNumber === null

    const isServerError = getAllCharacteristicsFetchStatus === 'error' || getPostPutDeleteCharacteristicGroupsFetchStatus === 'error'

    const characteristicsWithoutGroupFetchStatus = useSelector(getCharacteristicsWithoutGroupFetchStatus)

    const handleCloseServerErrorModal = () => {
        if (getAllCharacteristicsFetchStatus === 'error') {
            dispatch(changeGetAllCharacteristicsFetchStatus('idleAfterError'))
        }
        if (getPostPutDeleteCharacteristicGroupsFetchStatus === 'error') {
            dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idleAfterError'))
        }
        if (characteristicsWithoutGroupFetchStatus === 'error') {
            dispatch(changeCharacteristicsWithoutGroupFetchStatus('idle'))
        }
    }

    useEffect(() => {
        dispatch(getCharacteristicsWithoutGroupFromServer())
    }, [dispatch, getCharacteristicsWithoutGroupFromServer])

    const characteristicsWithoutGroup = useSelector(getCharacteristicsWithoutGroup)

    return (
        <>
            <AddCharacteristicGroup
                icon={<AddIcon dialogIcon />}
                title={'Добавление группы характеристик товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        disableRipple
                        onClick={handleSaveNewCharacteristicGroup}
                        disabled={isSaveButtonDisable}
                    >
                        <SaveIcon />
                    </IconButton>,
                ]}
                characteristicGroupField={characteristicGroupFieldValues}
                changeCharacteristicGroupFields={handleChangeCharacteristicFields}
                characteristics={characteristicsWithoutGroup}
                isOpenCharacteristicListModal={openCharacteristicListModal}
                onOpenCharacteristicListModal={handleOpenCharacteristicListModal}
                onCloseCharacteristicListModal={handleCloseCharacteristicListModal}
                isCharacteristicInGroup={isCharacteristicInGroup}
                addRemoveCharacteristic={handleAddRemoveCharacteristic}
                orderNumberHelper={'Значение от 0 до 999'}
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

export default AddCharacteristicGroupPage
