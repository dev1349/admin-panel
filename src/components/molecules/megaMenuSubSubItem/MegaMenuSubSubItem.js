import React from 'react'
import Li from '../../atoms/li/Li'
import Container from '../../templates/container/Container'
import IconButton from '../buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'

const CatalogSubSubCategory = ({ subSubItem, activeSubSubItemId, setActiveThirdLevelItem, onDeleteMegaMenuItem, onChangeMegaMenuItem }) => {
    const handleMouseMove = () => {
        if (activeSubSubItemId === subSubItem.id) return
        setActiveThirdLevelItem(subSubItem)()
    }

    return (
        <Li catalogSubSubItem>
            <Container
                catalogSubSubItemContainer
                activeCatalogSubSubItemContainer={activeSubSubItemId === subSubItem.id}
                onMouseEnter={setActiveThirdLevelItem(subSubItem)}
                onMouseMove={handleMouseMove}
            >
                {subSubItem.name}
                {subSubItem.id === activeSubSubItemId && (
                    <Container addSubSubItemButtonsContainer>
                        <IconButton
                            dialogButton
                            disableRipple
                            editItemButton
                            editItemButtonSmall
                            onClick={onChangeMegaMenuItem(subSubItem)}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            dialogButton
                            disableRipple
                            editItemButton
                            editItemButtonSmall
                            onClick={onDeleteMegaMenuItem(subSubItem.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Container>
                )}
            </Container>
        </Li>
    )
}

export default CatalogSubSubCategory
