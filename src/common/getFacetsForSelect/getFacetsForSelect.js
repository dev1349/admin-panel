// maybe will be useful
//
// export const createFacetsItems = facets => {
//     let facetItems = []
//
//     if (facets) {
//         Object.keys(facets).forEach(facet => {
//             facetItems.push(facet)
//             facets[facet].forEach(item =>
//                 facetItems.push({
//                     id: item.characteristicValueId,
//                     label: item.characteristicValue,
//                     value: item.characteristicValueId,
//                 })
//             )
//         })
//     }
//
//     return facetItems
// }

export const createCharacteristicItems = facets => {
    if (!facets) return []

    return Object.keys(facets).map((key, index) => ({
        id: index,
        value: key,
        label: key,
    }))
}

export const createCharacteristicValueItems = (categoryFacets, itemCharacteristic = null) => {
    if (itemCharacteristic === null) return []
    if (categoryFacets === undefined) return []

    if (categoryFacets[itemCharacteristic] === undefined) return []

    return categoryFacets[itemCharacteristic].map(characteristicValue => ({
        id: characteristicValue.characteristicValueId,
        label: characteristicValue.characteristicValue,
        value: characteristicValue.characteristicValueId,
    }))
}
