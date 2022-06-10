import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import AddCharacteristicGroup from '../../organisms/addCharacteristicGroup/AddCharacteristicGroup'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeGetAllCharacteristicsFetchStatus,
    getAllCharacteristics,
    getGetAllCharacteristicsFetchStatus,
} from '../../../reducers/characteristicsSlice'
import {
    changeGetPostPutDeleteCharacteristicGroupsFetchStatus,
    getCharacteristicGroup,
    getGetPostPutDeleteCharacteristicGroupsFetchStatus,
    saveChangedCharacteristicGroup,
} from '../../../reducers/characteristicGroupsSlice'
import { useHistory, useParams } from 'react-router-dom'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import { createValueForUpdating, leaveIdOnlyInObject } from '../../../common/preparingDataForSending/preparingDataForSending'
import {
    changeCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroup,
    getCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroupFromServer,
} from '../../../reducers/characteristicsWithoutGroupSlice'

const EditCharacteristicGroupPage = () => {
    const initialCharacteristicGroupState = {
        name: null,
        orderNumber: 999,
        isAdminOnly: false,
        characteristics: [],
    }

    const [characteristicGroupFieldValues, setCharacteristicGroupFieldValues] = useState(initialCharacteristicGroupState)

    const [characteristicGroupInitialFieldValues, setCharacteristicGroupInitialFieldValues] = useState(null)

    const handleChangeCharacteristicGroupFields = payload => {
        setCharacteristicGroupFieldValues(prev => ({ ...prev, ...payload }))
    }

    const getAllCharacteristicsFetchStatus = useSelector(getGetAllCharacteristicsFetchStatus)

    const getPostPutDeleteCharacteristicGroupsFetchStatus = useSelector(getGetPostPutDeleteCharacteristicGroupsFetchStatus)

    const isPending = getAllCharacteristicsFetchStatus === 'pending' || getPostPutDeleteCharacteristicGroupsFetchStatus === 'pending'

    const handleSaveChangedCharacteristicGroup = () => {
        const valueForUpdating = createValueForUpdating(
            leaveIdOnlyInObject(characteristicGroupInitialFieldValues, ['characteristics']),
            leaveIdOnlyInObject(characteristicGroupFieldValues, ['characteristics']),
            [],
            'DELETE_FROM_PARENT'
        )

        if (!valueForUpdating) return

        dispatch(saveChangedCharacteristicGroup(valueForUpdating, () => history.push('/characteristicGroups')))
    }

    const isSaveChangesButtonDisabled =
        isPending ||
        !(characteristicGroupFieldValues.orderNumber >= 0) ||
        !createValueForUpdating(
            leaveIdOnlyInObject(characteristicGroupInitialFieldValues, ['characteristics']),
            leaveIdOnlyInObject(characteristicGroupFieldValues, ['characteristics']),
            [],
            'DELETE_FROM_PARENT'
        )

    const isGoBackButtonDisabled = isPending

    const history = useHistory()

    const handleGoBack = () => history.goBack()

    const isServerError = getAllCharacteristicsFetchStatus === 'error' || getPostPutDeleteCharacteristicGroupsFetchStatus === 'error'

    const dispatch = useDispatch()

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

    const [openCharacteristicListModal, setOpenCharacteristicListModal] = useState(false)

    const handleOpenCharacteristicListModal = () => setOpenCharacteristicListModal(true)

    const handleCloseCharacteristicListModal = () => setOpenCharacteristicListModal(false)

    useEffect(() => {
        if (getAllCharacteristicsFetchStatus !== 'idle') return
        dispatch(getAllCharacteristics())
    }, [getAllCharacteristicsFetchStatus, dispatch, getAllCharacteristics])

    const { characteristicGroupId } = useParams()

    useEffect(() => {
        if (characteristicGroupId === undefined) return
        dispatch(
            getCharacteristicGroup(parseInt(characteristicGroupId), characteristicGroupFieldValues => {
                setCharacteristicGroupInitialFieldValues(characteristicGroupFieldValues)
            })
        )
    }, [characteristicGroupId, dispatch, getCharacteristicGroup, setCharacteristicGroupInitialFieldValues])

    useEffect(() => {
        if (characteristicGroupInitialFieldValues === null) return
        if (getAllCharacteristicsFetchStatus !== 'success') return

        setCharacteristicGroupFieldValues(characteristicGroupInitialFieldValues)
    }, [
        characteristicGroupInitialFieldValues,
        getAllCharacteristicsFetchStatus,
        setCharacteristicGroupFieldValues,
        characteristicGroupInitialFieldValues,
    ])

    useEffect(() => {
        dispatch(getCharacteristicsWithoutGroupFromServer())
    }, [dispatch, getCharacteristicsWithoutGroupFromServer])

    const characteristicsWithoutGroup = useSelector(getCharacteristicsWithoutGroup)

    const characteristicsWithoutGroupAndCurrentGroup = [
        ...characteristicsWithoutGroup,
        ...(characteristicGroupInitialFieldValues ? characteristicGroupInitialFieldValues.characteristics : []),
    ]

    return (
        <>
            <AddCharacteristicGroup
                icon={<EditIcon dialogIcon />}
                title={'Редактирование группы характеристик товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        disableRipple
                        onClick={handleSaveChangedCharacteristicGroup}
                        disabled={isSaveChangesButtonDisabled}
                    >
                        <SaveIcon />
                    </IconButton>,
                ]}
                characteristicGroupField={characteristicGroupFieldValues}
                changeCharacteristicGroupFields={handleChangeCharacteristicGroupFields}
                characteristics={characteristicsWithoutGroupAndCurrentGroup}
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

export default EditCharacteristicGroupPage
