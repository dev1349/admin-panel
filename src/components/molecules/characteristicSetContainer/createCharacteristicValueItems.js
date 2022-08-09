export const createValue = characteristicValue => {
    return JSON.stringify({
        id: characteristicValue.id,
        value: characteristicValue.value,
        characteristic: characteristicValue.characteristic,
    })
}

export const createItem = characteristicValue => {
    return {
        id: characteristicValue.id,
        label: characteristicValue.value,
        value: createValue(characteristicValue),
    }
}

export const createCharacteristicValueItems = characteristic => {
    let characteristicValueItems = []

    if (characteristic?.characteristicValues) {
        characteristic.characteristicValues.forEach(characteristicValue => characteristicValueItems.push(createItem(characteristicValue)))
    }

    return characteristicValueItems.sort((firstEl, secondEl) => (firstEl.label > secondEl.label ? 1 : -1))
}
