import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { useStyle } from '../../../../hooks/useStyle'


const WSEditIcon = props => {
    const EditIconStyled = useStyle('EditIconStyle', EditIcon)
    return <EditIconStyled {...props} />
}

export default WSEditIcon
