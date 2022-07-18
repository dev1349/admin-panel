import React, { useEffect } from 'react'
import Container from '../../../templates/container/Container'
import UploadImageButtonToImageList from '../uploadImageButtonToImageList/UploadImageButtonToImageList'
import ImageInServerImageList from '../../imageInServerImageList/ImageInServerImageList'

const ImagesListWithUploadToServer = ({
    images,
    getImagesFromServer,
    makeImageAsChecked,
    uploadImageToServer,
    deleteImage = null,
    addedImageIds,
    pathToImage,
}) => {
    useEffect(() => {
        getImagesFromServer()
    }, [getImagesFromServer])

    return (
        <Container imageListItems>
            <Container imageListItem>
                <UploadImageButtonToImageList uploadImage={uploadImageToServer} />
            </Container>
            {images !== null &&
                [...images].reverse().map(image => (
                    <Container imageListItem key={image.id}>
                        <ImageInServerImageList
                            path={`${pathToImage}${image.hashIdImage}`}
                            altText={`Goods image ${image.id}`}
                            id={image.id}
                            deleteImage={deleteImage}
                            isChecked={addedImageIds.includes(image.id)}
                            makeImageAsChecked={makeImageAsChecked}
                        />
                    </Container>
                ))}
        </Container>
    )
}

export default ImagesListWithUploadToServer
