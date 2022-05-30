import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCharacteristic from '../../organisms/addCharacteristic/AddCharacteristic'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeGetAllCharacteristicsFetchStatus,
    changeGetPostPutDeleteCharacteristicsFetchStatus,
    getCharacteristic,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    saveChangedCharacteristic,
} from '../../../reducers/characteristicsSlice'
import { useHistory, useParams } from 'react-router-dom'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import {
    changeGetAllCharacteristicGroupsFetchStatus,
    getAllCharacteristicGroups,
    getCharacteristicGroups,
    getGetAllCharacteristicGroupsFetchStatus,
} from '../../../reducers/characteristicGroupsSlice'
import { createValueForUpdating } from '../../../common/preparingDataForSending/preparingDataForSending'
import ServerErrorModal from '../../molecules/modals/serverErrorModal/ServerErrorModal'
import Loader from '../../molecules/loader/Loader'

const EditCharacteristicPage = () => {
    const initialCharacteristicState = {
        name: null,
        orderNumber: 999,
        isAdminOnly: false,
        isAvailableInFilter: true,
        characteristicGroup: null,
        characteristicValues: [],
    }

    const [characteristicFieldValues, setCharacteristicFieldValues] = useState(initialCharacteristicState)

    const [characteristicInitialFieldValues, setCharacteristicInitialFieldValues] = useState(null)

    const handleChangeCharacteristicFields = payload => {
        setCharacteristicFieldValues(prev => ({ ...prev, ...payload }))
    }

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

    const handleChangeCharacteristicValue = payload => {
        setCharacteristicFieldValues(prev => {
            const newValues = [...prev.characteristicValues]
            newValues[Object.keys(payload)[0]] = {
                ...newValues[Object.keys(payload)[0]],
                value: payload[Object.keys(payload)[0]],
            }
            return {
                ...prev,
                characteristicValues: newValues,
            }
        })
    }

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

    const getAllCharacteristicGroupsFetchStatus = useSelector(getGetAllCharacteristicGroupsFetchStatus)

    const getPostPutDeleteCharacteristicsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicsFetchStatus)

    const isPending = getAllCharacteristicGroupsFetchStatus === 'pending' || getPostPutDeleteCharacteristicsFetchStatus === 'pending'

    const isGoBackButtonDisabled = isPending

    const dispatch = useDispatch()

    useEffect(() => {
        if (getAllCharacteristicGroupsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristicGroups())
    }, [getAllCharacteristicGroupsFetchStatus, dispatch, getAllCharacteristicGroups])

    const characteristicGroups = useSelector(getCharacteristicGroups)

    const { characteristicId } = useParams()

    useEffect(() => {
        if (characteristicId === undefined) return
        dispatch(
            getCharacteristic(parseInt(characteristicId), characteristicFieldValues => {
                setCharacteristicInitialFieldValues(characteristicFieldValues)
            })
        )
    }, [characteristicId, dispatch, getCharacteristic])

    useEffect(() => {
        if (characteristicInitialFieldValues === null) return
        if (getAllCharacteristicGroupsFetchStatus !== 'success') return

        setCharacteristicFieldValues(characteristicInitialFieldValues)
    }, [characteristicInitialFieldValues, getAllCharacteristicGroupsFetchStatus, setCharacteristicFieldValues])

    const history = useHistory()
    const handleGoBack = () => history.push('/characteristics')

    const handleSaveChangedCharacteristic = () => {
        const valueForUpdating = createValueForUpdating(
            characteristicInitialFieldValues,
            characteristicFieldValues,
            ['characteristicGroup'],
            'HARD_DELETE'
        )

        if (!valueForUpdating) return

        dispatch(
            saveChangedCharacteristic(
                valueForUpdating,
                characteristicInitialFieldValues.characteristicGroup
                    ? characteristicInitialFieldValues.characteristicGroup.id
                    : characteristicInitialFieldValues.characteristicGroup,
                () => history.push('/characteristics')
            )
        )
    }

    const isSaveChangesButtonDisabled =
        isPending ||
        !(characteristicFieldValues.name ? characteristicFieldValues.name.trim() : characteristicFieldValues.name) ||
        !(characteristicFieldValues.orderNumber >= 0) ||
        characteristicInitialFieldValues === null ||
        !createValueForUpdating(characteristicInitialFieldValues, characteristicFieldValues, ['characteristicGroup'], 'HARD_DELETE')

    const isServerError = getAllCharacteristicGroupsFetchStatus === 'error' || getPostPutDeleteCharacteristicsFetchStatus === 'error'

    const handleCloseServerErrorModal = () => {
        if (getAllCharacteristicGroupsFetchStatus === 'error') {
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('idleAfterError'))
        }
        if (getPostPutDeleteCharacteristicsFetchStatus === 'error') {
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idleAfterError'))
        }
        dispatch(changeGetAllCharacteristicsFetchStatus('idle'))
        dispatch(getAllCharacteristicGroups())
        history.push('/characteristics')
    }

    return (
        <>
            <AddCharacteristic
                icon={<EditIcon dialogIcon />}
                title={'Редактирование характеристики товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        disableRipple
                        onClick={handleSaveChangedCharacteristic}
                        disabled={isSaveChangesButtonDisabled}
                    >
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

export default EditCharacteristicPage
