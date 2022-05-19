import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { createStyled } from '../../../../services/style/createStyled'

const ClearIconStyled = createStyled('ClearIconStyle', ClearIcon)

const WSClearIcon = props => {
    return <ClearIconStyled {...props} />
}

export default WSClearIcon
