import iconLibrary from './iconLibrary'

const addItemIcon = items => {
    return items.map(item => {
        const newItem = { ...item }

        if (iconLibrary[item.id]) {
            newItem.icon = iconLibrary[item.id]
        }
        if (newItem.subItems) {
            newItem.subItems = addItemIcon(newItem.subItems)
        }
        return newItem
    })
}

const addNavItemIcon = navItems => {
    return addItemIcon(navItems)
}

export default addNavItemIcon
