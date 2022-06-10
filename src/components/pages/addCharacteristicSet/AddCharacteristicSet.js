import React, { useEffect, useState } from 'react'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import AddCharacteristicSet from '../../organisms/addCharacteristicSet/AddCharacteristicSet'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCharacteristicSetsFetchStatus,
    getCharacteristicSetsFetchStatus,
    saveNewCharacteristicSet,
} from '../../../reducers/characteristicSetsSlice'
import { useHistory } from 'react-router-dom'
import {
    getCharacteristicsWithoutGroupFromServer,
    getCharacteristicsWithoutGroupFetchStatus,
    getCharacteristicsWithoutGroup,
} from '../../../reducers/characteristicsWithoutGroupSlice'
import {
    getAllCharacteristicGroups,
    getCharacteristicGroups,
    getGetAllCharacteristicGroupsFetchStatus,
} from '../../../reducers/characteristicGroupsSlice'

const AddCharacteristicSetPage = () => {
    const characteristicSetsFetchStatus = useSelector(getCharacteristicSetsFetchStatus)

    const dispatch = useDispatch()

    const history = useHistory()

    const handleGoBack = () => history.goBack()

    const isPendingSets = characteristicSetsFetchStatus === 'pending'

    const characteristicsGroupFetchStatus = useSelector(getGetAllCharacteristicGroupsFetchStatus)

    const isPendingCharacteristicGroups = characteristicsGroupFetchStatus === 'pending'

    const characteristicsWithoutGroupFetchStatus = useSelector(getCharacteristicsWithoutGroupFetchStatus)

    const isPendingCharacteristicsWithoutGroup = characteristicsWithoutGroupFetchStatus === 'pending'

    const isServerError =
        characteristicSetsFetchStatus === 'error' ||
        characteristicsWithoutGroupFetchStatus === 'error' ||
        characteristicsGroupFetchStatus === 'error'

    const isPending = isPendingSets || isPendingCharacteristicsWithoutGroup || isPendingCharacteristicGroups

    const isGoBackButtonDisabled = isPending

    const initialCharacteristicSetState = {
        name: null,
        characteristics: [],
        characteristicsGroup: [],
    }

    const handleCloseServerErrorModal = () => {
        dispatch(changeCharacteristicSetsFetchStatus('idle'))
        dispatch(getAllCharacteristicGroups())
        dispatch(getCharacteristicsWithoutGroupFromServer())
        setCharacteristicSetFieldValues(initialCharacteristicSetState)
    }

    const [characteristicSetFieldValues, setCharacteristicSetFieldValues] = useState(initialCharacteristicSetState)

    const handleChangeCharacteristicFieldValues = payload => {
        setCharacteristicSetFieldValues(prev => ({ ...prev, ...payload }))
    }

    const goToCharacteristicSetsPage = () => history.push('/characteristicSets')

    const handleSaveNewCharacteristicSet = () => {
        dispatch(saveNewCharacteristicSet(characteristicSetFieldValues, goToCharacteristicSetsPage))
    }

    const isSaveButtonDisabled = isPending || characteristicSetFieldValues.name === null || characteristicSetFieldValues.name.trim() === ''

    useEffect(() => {
        dispatch(getAllCharacteristicGroups())
    }, [dispatch, getAllCharacteristicGroups])

    useEffect(() => {
        dispatch(getCharacteristicsWithoutGroupFromServer())
    }, [dispatch, getCharacteristicsWithoutGroupFromServer])

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

    return (
        <>
            <AddCharacteristicSet
                icon={<AddIcon dialogIcon />}
                title={'Добавление набора характеристик товара'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isGoBackButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewCharacteristicSet} disabled={isSaveButtonDisabled}>
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

export default AddCharacteristicSetPage
