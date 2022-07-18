import React from 'react'
import Container from '../../../templates/container/Container'
import ImageInImageList from '../../imageInImageList/ImageInImageList'
import AddImageButton from '../../buttons/addImageButton/AddImageButton'

const ImageList = ({ images, onAdd, deleteImage, makeImageAsChecked, pathToImage }) => {
    return (
        <Container imageListItems>
            <Container imageListItem>
                <AddImageButton addImage={onAdd} />
            </Container>
            {images !== null &&
                images.map((image, index) => {
                    return (
                        <Container imageListItem key={index}>
                            <ImageInImageList
                                path={`${pathToImage}${image.image.hashIdImage}`}
                                altText={`Goods image ${image.image.id}`}
                                id={image.image.id}
                                deleteImage={deleteImage}
                                isChecked={image.isMain}
                                makeImageAsChecked={makeImageAsChecked}
                            />
                        </Container>
                    )
                })}
        </Container>
    )
}

export default ImageList
