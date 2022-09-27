import React, { useEffect, useState } from 'react'
import LabeledSelectField from '../../../molecules/inputs/labeledSelectField/LabeledSelectField'
import { findCategoryById } from '../../../pages/addCategory/categoryOperations'
import CharacteristicSetContainer from '../../../molecules/characteristicSetContainer/CharacteristicSetContainer'
import AddNewCharacteristicValueModal from './addNewCharacteristicValueModal/AddNewCharacteristicValueModal'

const createCategoryWithGoodItems = categories => {
    let categoryItems = []

    const createItems = category => {
        if (category.categoryType === 'WITH_GOODS') {
            categoryItems.push({
                id: category.id,
                label: category.name,
                value: category.id,
            })
        }
        if (Array.isArray(category.subCategories) && category.subCategories.length !== 0 && category.subCategories[0] !== null) {
            category.subCategories.forEach(subCategory => createItems(subCategory))
        }
    }

    if (categories) {
        categories.forEach(category => createItems(category))
    }

    return categoryItems
}

const CharacteristicsTab = ({
    activeCategoryId,
    changeGoodProperties,
    categories,
    isPending,
    setValuesFromCharacteristicSelects,
    valuesFromCharacteristicSelects,
    activeCharacteristic,
    setActiveCharacteristic,
    saveCharacteristicNewValues,
    characteristicGetGetPostPutDeleteFetchStatus,
    getCategoryFromServer,
    categoryLabel,
    categoryPlaceholder,
    characteristicPlaceholder,
    characteristicsHeader,
    addNewValueModalTitle,
}) => {
    const categoryWithGoodItems = createCategoryWithGoodItems(categories).sort((el1, el2) => (el1.label > el2.label ? 1 : -1))

    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        const newSelectedCategory = findCategoryById(categories, activeCategoryId)
        setSelectedCategory(newSelectedCategory)
    }, [activeCategoryId, setSelectedCategory])

    const handleSetUpdatedCategory = category => setSelectedCategory(category)

    useEffect(() => {
        if (characteristicGetGetPostPutDeleteFetchStatus === 'success' && selectedCategory !== null) {
            getCategoryFromServer(selectedCategory.id, handleSetUpdatedCategory)
        }
    }, [characteristicGetGetPostPutDeleteFetchStatus])

    const [openAddValueWindow, setOpenAddValueWindow] = useState(false)

    const handleOpenAddValueWindow = characteristic => () => {
        setOpenAddValueWindow(true)
        setActiveCharacteristic(characteristic)
    }

    const handleCloseAddValueWindow = () => {
        setOpenAddValueWindow(false)
        setActiveCharacteristic(null)
    }

    const isCharacteristicSetsListNotEmpty = category => category && category.characteristicSets.length !== 0

    return (
        <>
            <LabeledSelectField
                id={'goodsCategory'}
                label={categoryLabel}
                name={'category'}
                value={activeCategoryId}
                onChange={changeGoodProperties}
                items={categoryWithGoodItems}
                defaultLabel={categoryPlaceholder}
                isStartItemDisabled={true}
                disabled={isPending}
                autoFocus
            />
            {isCharacteristicSetsListNotEmpty(selectedCategory) &&
                selectedCategory.characteristicSets.map(characteristicSet => {
                    return (
                        <CharacteristicSetContainer
                            key={characteristicSet.id}
                            setTitle={characteristicSet.name}
                            characteristicGroups={characteristicSet.characteristicsGroup}
                            characteristics={characteristicSet.characteristics}
                            setValuesFromCharacteristicSelects={setValuesFromCharacteristicSelects}
                            valuesFromCharacteristicSelects={valuesFromCharacteristicSelects}
                            openAddValueWindow={handleOpenAddValueWindow}
                            characteristicPlaceholder={characteristicPlaceholder}
                            characteristicsHeader={characteristicsHeader}
                        />
                    )
                })}
            <AddNewCharacteristicValueModal
                openAddValueWindow={openAddValueWindow}
                closeAddValueWindow={handleCloseAddValueWindow}
                activeCharacteristic={activeCharacteristic}
                saveCharacteristicNewValues={saveCharacteristicNewValues}
                addNewValueModalTitle={addNewValueModalTitle}
            />
        </>
    )
}

export default CharacteristicsTab
