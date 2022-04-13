import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { useStyle } from '../../../../hooks/useStyle'


const AddImageIconWS = props => {
    const AddImageIconStyled = useStyle('AddImageIconStyled', AddPhotoAlternateIcon, null)
    return <AddImageIconStyled {...props} />
}

export default AddImageIconWS
