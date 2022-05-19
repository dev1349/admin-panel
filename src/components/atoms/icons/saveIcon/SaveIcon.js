import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import { createStyled } from '../../../../services/style/createStyled'

const SaveIconStyled = createStyled('SaveIconStyle', SaveIcon)

const WSSaveIcon = props => {
    return <SaveIconStyled {...props} />
}

export default WSSaveIcon
