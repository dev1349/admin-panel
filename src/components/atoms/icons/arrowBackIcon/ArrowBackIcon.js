import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useStyle } from '../../../../hooks/useStyle'


const ArrowBackIconWS = props => {
    const ArrowBackIconStyled = useStyle('ArrowBackIconStyle', ArrowBackIcon)
    return <ArrowBackIconStyled {...props} />
}

export default ArrowBackIconWS
