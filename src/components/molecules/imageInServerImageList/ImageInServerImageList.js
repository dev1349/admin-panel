import React from 'react'
import Container from '../../templates/container/Container'
import Img from '../../atoms/img/Img'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import IconButton from '../buttons/iconButton/IconButton'
import CheckIcon from '../../atoms/icons/checkIcon/CheckIcon'

const ImageInImageList = ({ path, altText, id, deleteImage = null, isChecked, makeImageAsChecked, isDeleteButtonDisabled = false }) => {
    return (
        <Container imageInImageListContainer>
            <Img imageInImageList path={path} altText={altText} />
            {deleteImage && (
                <Container deleteButtonContainerInImageList>
                    <IconButton dialogButton disableRipple onClick={deleteImage(id, isChecked)} disabled={isDeleteButtonDisabled(id)}>
                        <DeleteIcon dialogIcon />
                    </IconButton>
                </Container>
            )}

            <Container checkIconContainerInImageList>
                <IconButton dialogButton disableRipple checkedImages={isChecked} onClick={makeImageAsChecked(id)}>
                    <CheckIcon dialogIcon />
                </IconButton>
            </Container>
        </Container>
    )
}

export default ImageInImageList
