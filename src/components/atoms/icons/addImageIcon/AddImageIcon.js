import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { createStyled } from '../../../../services/style/createStyled'

const AddImageIconStyled = createStyled(
    'AddImageIconStyle',
    AddPhotoAlternateIcon
)

const AddImageIconWS = props => {
    return <AddImageIconStyled {...props} />
}

export default AddImageIconWS
