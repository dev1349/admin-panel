import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { useStyle } from '../../../../hooks/useStyle'


const WSClearIcon = props => {
    const ClearIconStyled = useStyle('ClearIconStyle', ClearIcon)
    return <ClearIconStyled {...props} />
}

export default WSClearIcon
