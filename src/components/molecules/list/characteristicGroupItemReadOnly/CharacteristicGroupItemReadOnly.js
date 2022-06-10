import React, { useState } from 'react'
import Box from '../../../atoms/wrappers/box/Box'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpandLessIcon'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import { Collapse, Fade } from '@mui/material'
import ListItem from '../../../atoms/list/listItem/ListItem'
import GroupIcon from '../../../atoms/icons/groupIcon/GroupIcon'
import List from '../../../atoms/list/list/List'
import IconButton from '../../buttons/iconButton/IconButton'
import ShowIcon from '../../../atoms/icons/showIcon/ShowIcon'
import CharacteristicIcon from '../../../atoms/icons/characteristicIcon/CharacteristicIcon'

const CharacteristicGroupItemReadOnly = ({
    characteristicGroup,
    activeCharacteristicItem,
    onMouseEnterCharacteristicItem,
    onMouseLeaveCharacteristicItem,
    handleOpenCharacteristicModal,
}) => {
    const hasCharacteristics = characteristicGroup => characteristicGroup.characteristics.length > 0

    const [openCharacteristicGroup, setOpenCharacteristicGroup] = useState(true)

    const handleOpenCharacteristicGroup = () => setOpenCharacteristicGroup(true)

    const handleCloseCharacteristicGroup = () => setOpenCharacteristicGroup(false)

    return (
        <ListItem key={characteristicGroup.id} dialogItem>
            <Box flexGrow1>
                <FlexTemplate alignItemsCenter gap7>
                    {hasCharacteristics(characteristicGroup) &&
                        (openCharacteristicGroup ? (
                            <ExpandLessIcon onClick={handleCloseCharacteristicGroup} dialogIcon />
                        ) : (
                            <ExpandMoreIcon onClick={handleOpenCharacteristicGroup} dialogIcon />
                        ))}
                    <Box marginLeft31={!hasCharacteristics(characteristicGroup)} flexGrow1>
                        <FlexTemplate alignItemsCenter gap7>
                            <GroupIcon dialogIcon />
                            <ListItemText primary={characteristicGroup.name} dialogItem />
                        </FlexTemplate>
                    </Box>
                </FlexTemplate>
                {hasCharacteristics(characteristicGroup) && (
                    <Collapse in={openCharacteristicGroup} timeout="auto" unmountOnExit>
                        <Box marginLeft62>
                            <List component={'ol'}>
                                {[...characteristicGroup.characteristics]
                                    .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                    .map(characteristic => (
                                        <ListItem
                                            key={characteristic.id}
                                            onMouseEnter={onMouseEnterCharacteristicItem(characteristic.id)}
                                            onMouseLeave={onMouseLeaveCharacteristicItem}
                                            dialogItem
                                        >
                                            <Box flexGrow1>
                                                <FlexTemplate spaceBetween alignItemsCenter gap10>
                                                    <FlexTemplate alignItemsCenter gap7>
                                                        <CharacteristicIcon dialogIcon />
                                                        <ListItemText dialogItem primary={`${characteristic.name}`} />
                                                    </FlexTemplate>
                                                    <Fade in={activeCharacteristicItem === characteristic.id} timeout={0}>
                                                        <div>
                                                            <IconButton
                                                                dialogButton
                                                                disableRipple
                                                                onClick={handleOpenCharacteristicModal(characteristic)}
                                                            >
                                                                <ShowIcon />
                                                            </IconButton>
                                                        </div>
                                                    </Fade>
                                                </FlexTemplate>
                                            </Box>
                                        </ListItem>
                                    ))}
                            </List>
                        </Box>
                    </Collapse>
                )}
            </Box>
        </ListItem>
    )
}

export default CharacteristicGroupItemReadOnly
