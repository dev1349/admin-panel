import React from 'react'
import ForumIcon from '@mui/icons-material/Forum'
import { createStyled } from '../../../../services/style/createStyled'

const DialogsIconStyled = createStyled('DialogsIconStyle', ForumIcon)

const DialogsIconWS = props => {
    return <DialogsIconStyled {...props} />
}

export default DialogsIconWS
