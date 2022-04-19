import React from 'react'
import HideImageIcon from '@mui/icons-material/HideImage'
import { useStyle } from '../../../../hooks/useStyle'


const WSHideImageIcon = props => {
    const HideImageIconStyled = useStyle('HideImageIconStyle', HideImageIcon)
    return <HideImageIconStyled {...props} />
}

export default WSHideImageIcon
