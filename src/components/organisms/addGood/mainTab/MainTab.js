import React, { useState } from 'react'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledTextFieldMultiline from '../../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import LabeledFloatField from '../../../molecules/inputs/labeledFloatField/LabeledFloatField'
import LabeledSelectField from '../../../molecules/inputs/labeledSelectField/LabeledSelectField'
import LabeledNumberField from '../../../molecules/inputs/labeledNumberField/LabeledNumberField'
import LabeledImageList from '../../../molecules/inputs/labeledImageList/LabeledImageList'
import AddGoodImagesModal from './addGoodImagesModal/AddGoodImagesModal'
import Fragment from '../../../atoms/fragment/Fragment'

const MainTab = ({
    goodProperties,
    changeGoodProperties,
    goodStateItems,
    uploadImageToServer,
    addImageToGood,
    deleteImageFromGood,
    makeImageAsMain,
    images,
    getImagesFromServer,
    pathToImage,
    imagesPerPage,
    changeImagesPerPage,
    isPaginationDisabled,
    totalPages,
    currentPageNumber,
    paginationItemClick,
    deleteImageFromServer,
}) => {
    const [openAddGoodImagesModal, setOpenAddGoodImagesModal] = useState(false)

    const handleOpenAddGoodImagesModal = () => {
        setOpenAddGoodImagesModal(true)
    }

    const handleCloseAddGoodImages = () => setOpenAddGoodImagesModal(false)

    const addedImageIds = goodProperties['images'] ? goodProperties['images'].map(image => image.image.id) : []

    return (
        <>
            <LabeledTextField
                id={'goodsName'}
                label={
                    <>
                        Название <Fragment requiredFieldStar>*</Fragment>
                    </>
                }
                name={'name'}
                value={goodProperties['name']}
                onChange={changeGoodProperties}
                placeholder={'Введите название товара'}
                autoFocus
            />
            <LabeledTextFieldMultiline
                id={'goodsDescription'}
                label={'Описание'}
                name={'description'}
                value={goodProperties['description']}
                onChange={changeGoodProperties}
                placeholder={'Введите описание товара'}
            />
            <LabeledFloatField
                id={'goodsPrice'}
                label={'Цена'}
                name={'price'}
                value={goodProperties['price']}
                onChange={changeGoodProperties}
                placeholder={'Введите цену товара'}
                pattern={'^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'}
            />
            <LabeledFloatField
                id={'discountGoodsPrice'}
                label={'Цена по скидке'}
                name={'discountPrice'}
                value={goodProperties['discountPrice']}
                onChange={changeGoodProperties}
                placeholder={'Введите цену товара по скидке'}
                pattern={'^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'}
            />
            <LabeledNumberField
                id={'goodsCount'}
                label={'Количество, шт.'}
                name={'amount'}
                value={goodProperties['amount']}
                onChange={changeGoodProperties}
                placeholder={'Введите количество товара'}
            />
            <LabeledSelectField
                id={'goodsState'}
                label={'Состояние'}
                name={'goodState'}
                value={goodProperties['goodState']}
                onChange={changeGoodProperties}
                items={goodStateItems}
                defaultLabel={'Выберите состояние товара'}
                isStartItemDisabled={true}
            />
            <LabeledImageList
                id={'goodsImages'}
                label={'Фото'}
                name={'images'}
                images={goodProperties['images']}
                onAdd={handleOpenAddGoodImagesModal}
                deleteImage={deleteImageFromGood}
                makeImageAsChecked={makeImageAsMain}
                pathToImage={pathToImage}
            />
            <AddGoodImagesModal
                openAddGoodImagesModal={openAddGoodImagesModal}
                closeAddGoodImagesModal={handleCloseAddGoodImages}
                images={images}
                getImagesFromServer={getImagesFromServer}
                makeImageAsChecked={addImageToGood}
                uploadImageToServer={uploadImageToServer}
                addedImageIds={addedImageIds}
                pathToImage={pathToImage}
                imagesPerPage={imagesPerPage}
                changeImagesPerPage={changeImagesPerPage}
                isPaginationDisabled={isPaginationDisabled}
                totalPages={totalPages}
                currentPageNumber={currentPageNumber}
                paginationItemClick={paginationItemClick}
                deleteImageFromServer={deleteImageFromServer}
            />
        </>
    )
}

export default MainTab
