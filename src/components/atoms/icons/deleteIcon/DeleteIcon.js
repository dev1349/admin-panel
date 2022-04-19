import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStyle } from '../../../../hooks/useStyle'


const WSDeleteIcon = props => {
    const DeleteIconStyled = useStyle('DeleteIconStyle', DeleteIcon)
    return <DeleteIconStyled {...props} />
}

export default WSDeleteIcon
