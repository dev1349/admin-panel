import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStyle } from '../../../../hooks/useStyle'


const WSDeleteIcon = props => {
    const DeleteIconStyled = useStyle('DeleteIconStyled', DeleteIcon, null)
    return <DeleteIconStyled {...props} />
}

export default WSDeleteIcon
