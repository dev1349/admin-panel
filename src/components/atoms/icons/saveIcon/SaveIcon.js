import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import { useStyle } from '../../../../hooks/useStyle'


const WSSaveIcon = props => {
    const SaveIconStyled = useStyle('SaveIconStyled', SaveIcon, null)
    return <SaveIconStyled {...props} />
}

export default WSSaveIcon
