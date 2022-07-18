import React from 'react'
import IconButton from '../../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../../atoms/icons/undoIcon/UndoIcon'
import AdminModal from '../../../../molecules/modals/adminModal/AdminModal'
import ImagesListWithUploadToServer from '../../../../molecules/inputs/imageListWithUploadToServer/ImagesListWithUploadToServer'
import Container from '../../../../templates/container/Container'

const AddGoodImagesModal = ({
    openAddGoodImagesModal,
    closeAddGoodImagesModal,
    images,
    getImagesFromServer,
    makeImageAsChecked,
    uploadImageToServer,
    addedImageIds,
    pathToImage,
}) => {
    return (
        <AdminModal
            open={openAddGoodImagesModal}
            onClose={closeAddGoodImagesModal}
            title={'Выбор/добавление фото товара'}
            buttons={[
                <IconButton key={0} dialogButton disableRipple onClick={closeAddGoodImagesModal} autoFocus>
                    <UndoIcon />
                </IconButton>,
            ]}
            addImageContent
        >
            <Container imageListBorder>
                <ImagesListWithUploadToServer
                    images={images}
                    getImagesFromServer={getImagesFromServer}
                    makeImageAsChecked={makeImageAsChecked}
                    uploadImageToServer={uploadImageToServer}
                    addedImageIds={addedImageIds}
                    pathToImage={pathToImage}
                />
            </Container>
        </AdminModal>
    )
}

export default AddGoodImagesModal
