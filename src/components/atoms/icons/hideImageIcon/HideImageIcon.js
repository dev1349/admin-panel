import React from 'react'
import HideImageIcon from '@mui/icons-material/HideImage'
import { useStyle } from '../../../../hooks/useStyle'


const WSHideImageIcon = props => {
    const HideImageIconStyled = useStyle('HideImageIconStyled', HideImageIcon, null)
    return <HideImageIconStyled {...props} />
}

export default WSHideImageIcon
