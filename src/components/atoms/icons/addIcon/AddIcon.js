import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useStyle } from '../../../../hooks/useStyle'


const WSAddIcon = props => {
    const AddIconStyled = useStyle('AddIconStyle', AddIcon)
    return <AddIconStyled {...props} />
}

export default WSAddIcon
