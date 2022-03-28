import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { styled } from '@mui/material'

const AddImageIconStyled = styled(AddPhotoAlternateIcon, {
    name: 'AddImageIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AddImageIconWS = props => {
    return <AddImageIconStyled {...props} />
}

export default AddImageIconWS
