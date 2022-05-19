import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { createStyled } from '../../../../services/style/createStyled'

const DeleteIconStyled = createStyled('DeleteIconStyle', DeleteIcon)

const WSDeleteIcon = props => {
    return <DeleteIconStyled {...props} />
}

export default WSDeleteIcon
