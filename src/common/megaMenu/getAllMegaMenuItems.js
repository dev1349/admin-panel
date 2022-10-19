export const createMegaMenuItemsArray = megaMenuItems => {
    let megaMenuItemsArray = []

    const createMegaMenuItems = megaMenuItem => {
        megaMenuItemsArray.push({
            id: megaMenuItem.id,
            name: megaMenuItem.name,
            url: megaMenuItem.url,
            ordering: megaMenuItem.ordering,
            parentItem: megaMenuItem.parentItem,
        })
        if (Array.isArray(megaMenuItem.subItemList) && megaMenuItem.subItemList.length !== 0) {
            megaMenuItem.subItemList.forEach(subItem => createMegaMenuItems(subItem))
        }
    }

    if (megaMenuItems) {
        megaMenuItems.forEach(megaMenuItem => createMegaMenuItems(megaMenuItem))
    }

    return megaMenuItemsArray
}
