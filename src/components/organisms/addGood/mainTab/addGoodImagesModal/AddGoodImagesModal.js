import React, { useEffect, useMemo, useState } from 'react'
import IconButton from '../../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../../atoms/icons/undoIcon/UndoIcon'
import AdminModal from '../../../../molecules/modals/adminModal/AdminModal'
import ImagesListWithUploadToServer from '../../../../molecules/inputs/imageListWithUploadToServer/ImagesListWithUploadToServer'
import Container from '../../../../templates/container/Container'
import ItemsPerPage from '../../../../molecules/itemsPerPage/ItemsPerPage'
import Pagination from '../../../../atoms/pagination/Pagination'
import DeleteModal from '../../../../molecules/modals/deleteModal/DeleteModal'
import SaveIcon from '../../../../atoms/icons/saveIcon/SaveIcon'

const AddGoodImagesModal = ({
    openAddGoodImagesModal,
    closeAddGoodImagesModal,
    images,
    addImagesToGood,
    uploadImageToServer,
    addedImages,
    pathToImage,
    imagesPerPage,
    changeImagesPerPage,
    isPaginationDisabled,
    totalPages,
    currentPageNumber,
    paginationItemClick,
    deleteImageFromServer,
    isDeleteImageButtonDisabled,
}) => {
    const [openDeletingWindow, setOpenDeletingWindow] = useState(false)

    const handleCloseDeletingWindow = () => setOpenDeletingWindow(false)

    const [deletingImageId, setDeletingImageId] = useState(null)

    const handleSetDeletingImageId = id => () => {
        setDeletingImageId(id)
        setOpenDeletingWindow(true)
    }

    const handleDeleteImageFromServer = () => {
        handleCloseDeletingWindow()
        deleteImageFromServer(deletingImageId)
    }

    const [selectedImages, setSelectedImages] = useState([])

    useEffect(() => {
        setSelectedImages(addedImages)
    }, [setSelectedImages, addedImages])

    const addedImageIds = useMemo(() => addedImages.map(currentImage => currentImage.id), [addedImages])

    const selectedImageIds = useMemo(() => selectedImages.map(currentSelectedImage => currentSelectedImage.id), [selectedImages])

    const handleSelectImage = id => () => {
        if (selectedImageIds.includes(id)) {
            setSelectedImages(prev => prev.filter(currentImage => currentImage.id !== id))
            return
        }

        const selectImage = images.find(currentImage => currentImage.id === id)
        setSelectedImages(prev => [...prev, selectImage])
    }

    const handleAddImagesToGood = () => {
        closeAddGoodImagesModal()
        addImagesToGood(selectedImages)
        setSelectedImages([])
    }

    const isEqualImageIds =
        selectedImages.length === addedImageIds.length &&
        selectedImages.map(currentImage => currentImage.id).reduce((prev, current) => addedImageIds.includes(current) && prev, true)

    const isAddImagesToGoodButtonDisabled = selectedImages.length === 0 || isEqualImageIds

    const handleCloseAddGoodImagesModal = () => {
        closeAddGoodImagesModal()
        setSelectedImages([])
    }

    return (
        <AdminModal
            open={openAddGoodImagesModal}
            onClose={handleCloseAddGoodImagesModal}
            title={'Выбор/добавление фото товара'}
            buttons={[
                <IconButton key={0} dialogButton disableRipple onClick={handleCloseAddGoodImagesModal} autoFocus>
                    <UndoIcon />
                </IconButton>,
                <IconButton key={1} dialogButton disableRipple onClick={handleAddImagesToGood} disabled={isAddImagesToGoodButtonDisabled}>
                    <SaveIcon dialogIcon />
                </IconButton>,
            ]}
            addImageContent
        >
            <Container imageListBorder>
                <ImagesListWithUploadToServer
                    images={images}
                    makeImageAsChecked={handleSelectImage}
                    uploadImageToServer={uploadImageToServer}
                    addedImageIds={selectedImageIds}
                    pathToImage={pathToImage}
                    deleteImage={handleSetDeletingImageId}
                    isDeleteButtonDisabled={isDeleteImageButtonDisabled}
                />
            </Container>
            <Container marginTop7>
                <ItemsPerPage
                    title={'Показывать на странице:'}
                    buttonValues={[10, 25, 50]}
                    currentValue={imagesPerPage}
                    onChange={changeImagesPerPage}
                    disabled={isPaginationDisabled}
                />
            </Container>
            {totalPages !== null && totalPages !== 1 && (
                <Container marginTop7>
                    <Pagination
                        dialogPagination
                        count={totalPages}
                        page={currentPageNumber ? currentPageNumber + 1 : 1}
                        onChange={paginationItemClick}
                        disabled={isPaginationDisabled}
                        shape="rounded"
                    />
                </Container>
            )}
            <DeleteModal
                open={openDeletingWindow}
                onClose={handleCloseDeletingWindow}
                onYes={handleDeleteImageFromServer}
                title={'Подтверждение удаления'}
                description={'Вы действительно хотите удалить это изображения с сервера?'}
            />
        </AdminModal>
    )
}

export default AddGoodImagesModal
