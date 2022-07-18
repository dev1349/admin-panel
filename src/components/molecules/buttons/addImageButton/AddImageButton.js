import React from 'react'
import Container from '../../../templates/container/Container'
import IconButton from '../iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'

const AddImageButton = ({ addImage }) => {
    return (
        <Container imageInImageListContainer>
            <Container uploadImageButtonToImageListContainer>
                <IconButton dialogButton disableRipple onClick={addImage}>
                    <AddIcon dialogIcon />
                </IconButton>
            </Container>
        </Container>
    )
}

export default AddImageButton
