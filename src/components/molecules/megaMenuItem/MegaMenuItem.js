import React from 'react'
import Li from '../../atoms/li/Li'
import Container from '../../templates/container/Container'
import CatalogItem from '../../atoms/catalogItem/CatalogItem'
import ChevronForward from '../../atoms/icons/chevronForward/ChevronForward'
import IconButton from '../buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'

const MegaMenuItem = ({
    firstLevelItem,
    setActiveFirstLevelItem,
    activeFirstLevelItemId,
    hoveredFirstLevelItemId,
    onDeleteMegaMenuItem,
    onChangeMegaMenuItem,
}) => {
    const isSubItems = firstLevelItem.subItemList?.length > 0

    const handleMouseMove = () => {
        if (activeFirstLevelItemId === firstLevelItem.id) return
        setActiveFirstLevelItem(firstLevelItem)()
    }

    return (
        <Li onMouseEnter={setActiveFirstLevelItem(firstLevelItem)} onMouseMove={handleMouseMove} catalogItem>
            <Container catalogItemLinkContainer activeMenuItemContainer={activeFirstLevelItemId === firstLevelItem.id}>
                <Container catalogItemContainer>
                    <CatalogItem darkCatalogItem hoveredCatalogItem={hoveredFirstLevelItemId === firstLevelItem.id}>
                        {firstLevelItem.name}
                    </CatalogItem>
                    {isSubItems && <ChevronForward light catalogItem />}
                </Container>
                {activeFirstLevelItemId === firstLevelItem.id && (
                    <Container catalogItemButtonsContainer>
                        <IconButton dialogButton disableRipple editItemButton onClick={onChangeMegaMenuItem(firstLevelItem)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton dialogButton disableRipple editItemButton onClick={onDeleteMegaMenuItem(firstLevelItem.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Container>
                )}
            </Container>
        </Li>
    )
}

export default MegaMenuItem
