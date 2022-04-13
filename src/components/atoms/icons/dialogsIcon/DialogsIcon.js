import React from 'react'
import ForumIcon from '@mui/icons-material/Forum'
import { useStyle } from '../../../../hooks/useStyle'


const DialogsIconWS = props => {
    const DialogsIconStyled = useStyle('DialogsIconStyled', ForumIcon, null)
    return <DialogsIconStyled {...props} />
}

export default DialogsIconWS
