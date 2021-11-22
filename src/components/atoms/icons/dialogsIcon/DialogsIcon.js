import React from 'react'
import { styled } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum'

const DialogsIconStyled = styled(ForumIcon, {
    name: 'DialogsIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const DialogsIconWS = props => {
    return <DialogsIconStyled {...props} />
}

export default DialogsIconWS
