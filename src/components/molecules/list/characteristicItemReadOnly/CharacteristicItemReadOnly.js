import React from 'react'
import Box from '../../../atoms/wrappers/box/Box'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import CharacteristicIcon from '../../../atoms/icons/characteristicIcon/CharacteristicIcon'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import { Fade } from '@mui/material'
import IconButton from '../../buttons/iconButton/IconButton'
import ShowIcon from '../../../atoms/icons/showIcon/ShowIcon'
import ListItem from '../../../atoms/list/listItem/ListItem'

const CharacteristicItemReadOnly = ({
    characteristic,
    activeCharacteristicItem,
    handleMouseEnterCharacteristicItem,
    handleMouseLeaveCharacteristicItem,
    handleOpenCharacteristicModal,
}) => {
    return (
        <ListItem
            key={characteristic.id}
            onMouseEnter={handleMouseEnterCharacteristicItem(characteristic.id)}
            onMouseLeave={handleMouseLeaveCharacteristicItem}
            dialogItem
        >
            <Box flexGrow1 marginLeft31>
                <FlexTemplate spaceBetween alignItemsCenter gap10>
                    <FlexTemplate alignItemsCenter gap7>
                        <CharacteristicIcon dialogIcon />
                        <ListItemText dialogItem primary={`${characteristic.name}`} />
                    </FlexTemplate>
                    <FlexTemplate alignItemsCenter gap10>
                        <Fade in={activeCharacteristicItem === characteristic.id} timeout={0}>
                            <div>
                                <IconButton dialogButton disableRipple onClick={handleOpenCharacteristicModal(characteristic)}>
                                    <ShowIcon />
                                </IconButton>
                            </div>
                        </Fade>
                    </FlexTemplate>
                </FlexTemplate>
            </Box>
        </ListItem>
    )
}

export default CharacteristicItemReadOnly
