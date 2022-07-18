import React from 'react'
import Container from '../../templates/container/Container'
import Img from '../../atoms/img/Img'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import IconButton from '../buttons/iconButton/IconButton'
import CheckIcon from '../../atoms/icons/checkIcon/CheckIcon'

const ImageInImageList = ({ path, altText, id, deleteImage = null, isChecked, makeImageAsChecked }) => {
    return (
        <Container imageInImageListContainer>
            <Img imageInImageList path={path} altText={altText} />
            {deleteImage && (
                <Container deleteButtonContainerInImageList>
                    <IconButton dialogButton disableRipple onClick={deleteImage(id, isChecked)}>
                        <DeleteIcon dialogIcon />
                    </IconButton>
                </Container>
            )}
            {!isChecked && (
                <Container checkIconContainerInImageList>
                    <IconButton dialogButton disableRipple onClick={makeImageAsChecked(id)}>
                        <CheckIcon dialogIcon />
                    </IconButton>
                </Container>
            )}
            {isChecked && (
                <Container checkIconContainerInImageList>
                    <Container checkedImageContainerInImageList>
                        <CheckIcon dialogIcon checkedIcon />
                    </Container>
                </Container>
            )}
        </Container>
    )
}

export default ImageInImageList
