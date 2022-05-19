import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { createStyled } from '../../../../services/style/createStyled'

const EditIconStyled = createStyled('EditIconStyle', EditIcon, 'dialogIcon')

const WSEditIcon = props => {
    return <EditIconStyled {...props} />
}

export default WSEditIcon
