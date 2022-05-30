import React, { useEffect, useState } from 'react'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCharacteristic from '../../organisms/addCharacteristic/AddCharacteristic'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    changeGetAllCharacteristicGroupsFetchStatus,
    getAllCharacteristicGroups,
    getCharacteristicGroups,
    getGetAllCharacteristicGroupsFetchStatus,
} from '../../../reducers/characteristicGroupsSlice'
import ServerErrorModal from '../../molecules/modals/serverErrorModal/ServerErrorModal'
import Loader from '../../molecules/loader/Loader'
import {
    changeGetAllCharacteristicsFetchStatus,
    changeGetPostPutDeleteCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    saveNewCharacteristic,
    setOrder,
    setOrderBy,
} from '../../../reducers/characteristicsSlice'

const AddCharacteristicPage = () => {
    const initialCharacteristicState = {
        name: null,
        orderNumber: 999,
        isAdminOnly: false,
        isAvailableInFilter: true,
        characteristicGroup: null,
        characteristicValues: [],
    }

    const [characteristicFieldValues, setCharacteristicFieldValues] = useState(initialCharacteristicState)

    const handleChangeCharacteristicFields = payload => {
        setCharacteristicFieldValues(prev => ({ ...prev, ...payload }))
    }

    const characteristicGroups = useSelector(getCharacteristicGroups)

    const handleChangeCharacteristicGroup = payload => {
        let newCharacteristicGroup
        if (payload.characteristicGroup !== null) {
            newCharacteristicGroup = { id: payload.characteristicGroup }
        } else {
            newCharacteristicGroup = null
        }
        setCharacteristicFieldValues(prev => ({
            ...prev,
            characteristicGroup: newCharacteristicGroup,
        }))
    }

    const handleChangeCharacteristicValue = payload =>
        setCharacteristicFieldValues(prev => {
            const newValues = [...prev.characteristicValues]
            newValues[Object.keys(payload)[0]] = {
                value: payload[Object.keys(payload)[0]],
            }
            return { ...prev, characteristicValues: newValues }
        })

    const handleDeleteCharacteristicValue = index => () =>
        setCharacteristicFieldValues(prev => {
            const newValues = [...prev.characteristicValues]
            newValues.splice(index, 1)
            return { ...prev, characteristicValues: newValues }
        })

    const handleAddCharacteristicValue = () => {
        setCharacteristicFieldValues(prev => ({
            ...prev,
            characteristicValues: [...prev.characteristicValues, { value: null }],
        }))
    }

    const history = useHistory()

    const handleGoBack = () => history.goBack()

    const dispatch = useDispatch()

    const handleSaveNewCharacteristic = () => {
        dispatch(saveNewCharacteristic(characteristicFieldValues))
        dispatch(setOrder('desc'))
        dispatch(setOrderBy(''))
    }

    const getAllCharacteristicGroupsFetchStatus = useSelector(getGetAllCharacteristicGroupsFetchStatus)

    const getPostPutDeleteCharacteristicsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicsFetchStatus)

    useEffect(() => {
        if (getPostPutDeleteCharacteristicsFetchStatus === 'success') {
            dispatch(changeGetAllCharacteristicsFetchStatus('idle'))
            history.push('/characteristics')
        }
    }, [getPostPutDeleteCharacteristicsFetchStatus, dispatch, history])

    useEffect(() => {
        if (getAllCharacteristicGroupsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristicGroups())
    }, [getAllCharacteristicGroupsFetchStatus, dispatch, getAllCharacteristicGroups])

    const isPending = getAllCharacteristicGroupsFetchStatus === 'pending' || getPostPutDeleteCharacteristicsFetchStatus === 'pending'

    const isGoBackButtonDisabled = isPending

    const isSaveButtonDisable =
        isPending ||
        characteristicFieldValues.name === null ||
        characteristicFieldValues.name.trim() === '' ||
        characteristicFieldValues.orderNumber === null

    const isServerError = getAllCharacteristicGroupsFetchStatus === 'error' || getPostPutDeleteCharacteristicsFetchStatus === 'error'

    const handleCloseServerErrorModal = () => {
        if (getAllCharacteristicGroupsFetchStatus === 'error') {
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('idleAfterError'))
        }
        if (getPostPutDeleteCharacteristicsFetchStatus === 'error') {
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idleAfterError'))
        }
    }

    return (
        <>
            <AddCharacteristic
                icon={<AddIcon dialogIcon />}
                title={'Добавление характеристики товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewCharacteristic} disabled={isSaveButtonDisable}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                characteristicField={characteristicFieldValues}
                changeCharacteristicFields={handleChangeCharacteristicFields}
                changeCharacteristicGroup={handleChangeCharacteristicGroup}
                characteristicGroups={characteristicGroups}
                characteristicValues={characteristicFieldValues.characteristicValues}
                changeCharacteristicValue={handleChangeCharacteristicValue}
                deleteCharacteristicValue={handleDeleteCharacteristicValue}
                addCharacteristicValue={handleAddCharacteristicValue}
                isDisableGroupSelect={getAllCharacteristicGroupsFetchStatus !== 'success'}
                orderNumberHelper={'Значение от 0 до 999'}
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

export default AddCharacteristicPage
