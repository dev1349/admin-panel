import React from 'react'
import { styled } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const SaveIconStyled = styled(SaveIcon, {
    name: 'SaveIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSSaveIcon = props => {
    return <SaveIconStyled {...props} />
}

export default WSSaveIcon
