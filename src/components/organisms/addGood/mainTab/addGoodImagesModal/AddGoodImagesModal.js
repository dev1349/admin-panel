import React, { useEffect, useState } from 'react'
import IconButton from '../../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../../atoms/icons/undoIcon/UndoIcon'
import AdminModal from '../../../../molecules/modals/adminModal/AdminModal'
import ImagesListWithUploadToServer from '../../../../molecules/inputs/imageListWithUploadToServer/ImagesListWithUploadToServer'
import Container from '../../../../templates/container/Container'
import ItemsPerPage from '../../../../molecules/itemsPerPage/ItemsPerPage'
import Pagination from '../../../../atoms/pagination/Pagination'
import DeleteModal from '../../../../molecules/modals/deleteModal/DeleteModal'

const AddGoodImagesModal = ({
    openAddGoodImagesModal,
    closeAddGoodImagesModal,
    images,
    getImagesFromServer,
    makeImageAsChecked,
    uploadImageToServer,
    addedImageIds,
    pathToImage,
    imagesPerPage,
    changeImagesPerPage,
    isPaginationDisabled,
    totalPages,
    currentPageNumber,
    paginationItemClick,
    deleteImageFromServer,
}) => {
    useEffect(() => {
        if (!openAddGoodImagesModal) return
        if (currentPageNumber === null) {
            getImagesFromServer(`?pageSize=${imagesPerPage}`)
            return
        }
        if (currentPageNumber) {
            getImagesFromServer(`?pageNo=${currentPageNumber}&pageSize=${imagesPerPage}`)
        }
    }, [openAddGoodImagesModal, getImagesFromServer])

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

    const isDeleteImageButtonDisabled = id => isPaginationDisabled || addedImageIds.includes(id)

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
                    makeImageAsChecked={makeImageAsChecked}
                    uploadImageToServer={uploadImageToServer}
                    addedImageIds={addedImageIds}
                    pathToImage={pathToImage}
                    deleteImage={handleSetDeletingImageId}
                    isDeleteButtonDisabled={isDeleteImageButtonDisabled}
                />
            </Container>
            <Container marginTop7>
                <ItemsPerPage
                    title={'Показывать на странице:'}
                    buttonValues={[11, 23]}
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
