import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { useStyle } from '../../../../hooks/useStyle'


const WSEditIcon = props => {
    const EditIconStyled = useStyle('EditIconStyled', EditIcon, null)
    return <EditIconStyled {...props} />
}

export default WSEditIcon
