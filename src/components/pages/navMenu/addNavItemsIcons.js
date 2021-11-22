import iconLibrary from './iconLibrary'

const addItemsIcons = items => {
    return items.map(item => {
        const newItem = { ...item }

        if (iconLibrary[item.id]) {
            newItem.icon = iconLibrary[item.id]
        }
        if (newItem.subItems) {
            newItem.subItems = { ...newItem.subItems }
            newItem.subItems.items = addItemsIcons(newItem.subItems.items)
        }
        return newItem
    })
}

const addNavItemsIcons = navItemConf => {
    return {
        ...navItemConf,
        items: addItemsIcons(navItemConf.items),
    }
}

export default addNavItemsIcons
