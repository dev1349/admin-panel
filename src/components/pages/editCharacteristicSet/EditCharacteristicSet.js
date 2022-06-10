import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import AddCharacteristicSet from '../../organisms/addCharacteristicSet/AddCharacteristicSet'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCharacteristicSetsFetchStatus,
    getCharacteristicSet,
    getCharacteristicSetsFetchStatus,
    saveChangedCharacteristicSet,
} from '../../../reducers/characteristicSetsSlice'
import { useHistory, useParams } from 'react-router-dom'
import {
    getCharacteristicsWithoutGroupFromServer,
    getCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroup,
    changeCharacteristicsWithoutGroupFetchStatus,
} from '../../../reducers/characteristicsWithoutGroupSlice'
import {
    changeGetAllCharacteristicGroupsFetchStatus,
    getAllCharacteristicGroups,
    getCharacteristicGroups,
    getGetAllCharacteristicGroupsFetchStatus,
} from '../../../reducers/characteristicGroupsSlice'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import { createValueForUpdating, leaveIdOnlyInObject } from '../../../common/preparingDataForSending/preparingDataForSending'

const EditCharacteristicSetPage = () => {
    const characteristicSetsFetchStatus = useSelector(getCharacteristicSetsFetchStatus)

    const dispatch = useDispatch()

    const history = useHistory()

    const handleGoBack = () => history.goBack()

    const isPendingSets = characteristicSetsFetchStatus === 'pending'

    const characteristicsGroupFetchStatus = useSelector(getGetAllCharacteristicGroupsFetchStatus)

    const isPendingCharacteristicGroups = characteristicsGroupFetchStatus === 'pending'

    const characteristicsWithoutGroupFetchStatus = useSelector(getCharacteristicsWithoutGroupFetchStatus)

    const isPendingCharacteristicsWithoutGroup = characteristicsWithoutGroupFetchStatus === 'pending'

    const isPending = isPendingSets || isPendingCharacteristicsWithoutGroup || isPendingCharacteristicGroups

    const isGoBackButtonDisabled = isPending

    const isServerError =
        characteristicSetsFetchStatus === 'error' ||
        characteristicsWithoutGroupFetchStatus === 'error' ||
        characteristicsGroupFetchStatus === 'error'

    const initialCharacteristicSetState = {
        name: null,
        characteristics: [],
        characteristicsGroup: [],
    }

    const [characteristicSetFieldValues, setCharacteristicSetFieldValues] = useState(initialCharacteristicSetState)
    const [characteristicSetInitialFieldValues, setCharacteristicSetInitialFieldValues] = useState(null)

    const handleChangeCharacteristicFieldValues = payload => {
        setCharacteristicSetFieldValues(prev => ({ ...prev, ...payload }))
    }

    useEffect(() => {
        dispatch(getAllCharacteristicGroups())
    }, [dispatch, getAllCharacteristicGroups])

    useEffect(() => {
        dispatch(getCharacteristicsWithoutGroupFromServer())
    }, [dispatch, getCharacteristicsWithoutGroupFromServer])

    const { characteristicSetId } = useParams()

    useEffect(() => {
        if (characteristicSetId === undefined) return
        dispatch(
            getCharacteristicSet(parseInt(characteristicSetId), characteristicSetFieldValues => {
                setCharacteristicSetInitialFieldValues(characteristicSetFieldValues)
                setCharacteristicSetFieldValues(characteristicSetFieldValues)
            })
        )
    }, [characteristicSetId, dispatch, getCharacteristicSet, setCharacteristicSetInitialFieldValues, setCharacteristicSetFieldValues])

    const characteristicGroups = useSelector(getCharacteristicGroups)

    const characteristicsWithoutGroup = useSelector(getCharacteristicsWithoutGroup)

    const characteristicIdsInSet = characteristicSetFieldValues.characteristics.map(characteristic => characteristic.id)

    const isCharacteristicInSet = characteristicId => characteristicIdsInSet.includes(characteristicId)

    const handleAddRemoveCharacteristicInSet = characteristic => () => {
        if (isCharacteristicInSet(characteristic.id)) {
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristics: [...prev.characteristics.filter(char => char.id !== characteristic.id)],
            }))
            return
        }
        setCharacteristicSetFieldValues(prev => ({
            ...prev,
            characteristics: [...prev.characteristics, characteristic],
        }))
    }

    const characteristicGroupIdsInSet = characteristicSetFieldValues.characteristicsGroup.map(
        characteristicsGroup => characteristicsGroup.id
    )

    const isCharacteristicGroupInSet = characteristicGroupId => characteristicGroupIdsInSet.includes(characteristicGroupId)

    const handleAddRemoveCharacteristicGroupInSet = characteristicGroup => () => {
        if (isCharacteristicGroupInSet(characteristicGroup.id)) {
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristicsGroup: [...prev.characteristicsGroup.filter(char => char.id !== characteristicGroup.id)],
            }))
            return
        }
        setCharacteristicSetFieldValues(prev => ({
            ...prev,
            characteristicsGroup: [...prev.characteristicsGroup, characteristicGroup],
        }))
        const characteristicsInGroupIds = characteristicGroup.characteristics.map(characteristic => characteristic.id)
        setCharacteristicSetFieldValues(prev => ({
            ...prev,
            characteristics: [...prev.characteristics.filter(characteristic => !characteristicsInGroupIds.includes(characteristic.id))],
        }))
    }

    const handleAddRemoveCharacteristicInSetGroup = (currentCharacteristic, characteristicGroup) => () => {
        if (isCharacteristicGroupInSet(characteristicGroup.id)) {
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristicsGroup: [...prev.characteristicsGroup.filter(char => char.id !== characteristicGroup.id)],
            }))
            const characteristicsInGroupWithoutCurrent = characteristicGroup.characteristics.filter(
                characteristic => characteristic.id !== currentCharacteristic.id
            )
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristics: [...prev.characteristics, ...characteristicsInGroupWithoutCurrent],
            }))
            return
        }

        if (isCharacteristicInSet(currentCharacteristic.id)) {
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristics: [...prev.characteristics.filter(characteristic => characteristic.id !== currentCharacteristic.id)],
            }))
            return
        }

        if (!isCharacteristicInSet(currentCharacteristic.id)) {
            setCharacteristicSetFieldValues(prev => ({
                ...prev,
                characteristics: [...prev.characteristics, currentCharacteristic],
            }))
        }
    }

    const isSaveButtonDisabled =
        isPending ||
        !createValueForUpdating(
            leaveIdOnlyInObject(characteristicSetInitialFieldValues, ['characteristics', 'characteristicsGroup']),
            leaveIdOnlyInObject(characteristicSetFieldValues, ['characteristics', 'characteristicsGroup']),
            [],
            'DELETE_FROM_PARENT'
        )

    const goToCharacteristicSetsPage = () => history.push('/characteristicSets')

    const handleSaveChangedCharacteristicSet = () => {
        const valueForUpdating = createValueForUpdating(
            leaveIdOnlyInObject(characteristicSetInitialFieldValues, ['characteristics', 'characteristicsGroup']),
            leaveIdOnlyInObject(characteristicSetFieldValues, ['characteristics', 'characteristicsGroup']),
            [],
            'DELETE_FROM_PARENT'
        )

        if (!valueForUpdating) return

        dispatch(saveChangedCharacteristicSet(valueForUpdating, goToCharacteristicSetsPage))
    }

    const handleCloseServerErrorModal = () => {
        dispatch(changeCharacteristicSetsFetchStatus('idle'))
        dispatch(changeGetAllCharacteristicGroupsFetchStatus('idle'))
        dispatch(changeCharacteristicsWithoutGroupFetchStatus('idle'))
        history.push('/characteristicSets')
    }

    return (
        <>
            <AddCharacteristicSet
                icon={<EditIcon dialogIcon />}
                title={'Редактирование набора характеристик товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        disableRipple
                        onClick={handleSaveChangedCharacteristicSet}
                        disabled={isSaveButtonDisabled}
                    >
                        <SaveIcon />
                    </IconButton>,
                ]}
                characteristicSetFieldValues={characteristicSetFieldValues}
                changeCharacteristicFieldValues={handleChangeCharacteristicFieldValues}
                characteristicGroups={characteristicGroups}
                characteristicsWithoutGroup={characteristicsWithoutGroup}
                isCharacteristicInSet={isCharacteristicInSet}
                addRemoveCharacteristicInSet={handleAddRemoveCharacteristicInSet}
                isCharacteristicGroupInSet={isCharacteristicGroupInSet}
                addRemoveCharacteristicGroupInSet={handleAddRemoveCharacteristicGroupInSet}
                addRemoveCharacteristicInSetGroup={handleAddRemoveCharacteristicInSetGroup}
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

export default EditCharacteristicSetPage
