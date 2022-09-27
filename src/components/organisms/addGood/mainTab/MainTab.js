import React from 'react'
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
    addImagesToGood,
    deleteImageFromGood,
    makeImageAsMain,
    images,
    pathToImage,
    imagesPerPage,
    changeImagesPerPage,
    isPaginationDisabled,
    totalPages,
    currentPageNumber,
    paginationItemClick,
    deleteImageFromServer,
    isDeleteImageButtonDisabled,
    addedImages,
    isOpenAddGoodImagesModal,
    openAddGoodImagesModal,
    closeAddGoodImagesModal,
    nameLabel,
    namePlaceholder,
    descriptionLabel,
    descriptionPlaceholder,
    priceLabel,
    pricePlaceholder,
    discountPriceLabel,
    discountPricePlaceholder,
    amountLabel,
    amountPlaceholder,
    stateLabel,
    statePlaceholder,
    imagesLabel,
    deleteImagesModalTitle,
    deleteImagesModalDescription,
    imagesPerPageText,
    yesButtonTitle,
    noButtonTitle,
    imagesModalTitle,
}) => {
    return (
        <>
            <LabeledTextField
                id={'goodsName'}
                label={
                    <>
                        {nameLabel} <Fragment requiredFieldStar>*</Fragment>
                    </>
                }
                name={'name'}
                value={goodProperties['name']}
                onChange={changeGoodProperties}
                placeholder={namePlaceholder}
                autoFocus
            />
            <LabeledTextFieldMultiline
                id={'goodsDescription'}
                label={descriptionLabel}
                name={'description'}
                value={goodProperties['description']}
                onChange={changeGoodProperties}
                placeholder={descriptionPlaceholder}
            />
            <LabeledFloatField
                id={'goodsPrice'}
                label={priceLabel}
                name={'price'}
                value={goodProperties['price']}
                onChange={changeGoodProperties}
                placeholder={pricePlaceholder}
                pattern={'^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'}
            />
            <LabeledFloatField
                id={'discountGoodsPrice'}
                label={discountPriceLabel}
                name={'discountPrice'}
                value={goodProperties['discountPrice']}
                onChange={changeGoodProperties}
                placeholder={discountPricePlaceholder}
                pattern={'^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'}
            />
            <LabeledNumberField
                id={'goodsCount'}
                label={amountLabel}
                name={'amount'}
                value={goodProperties['amount']}
                onChange={changeGoodProperties}
                placeholder={amountPlaceholder}
            />
            <LabeledSelectField
                id={'goodsState'}
                label={stateLabel}
                name={'goodState'}
                value={goodProperties['goodState']}
                onChange={changeGoodProperties}
                items={goodStateItems}
                defaultLabel={statePlaceholder}
                isStartItemDisabled={true}
            />
            <LabeledImageList
                id={'goodsImages'}
                label={imagesLabel}
                name={'images'}
                images={goodProperties['images']}
                onAdd={openAddGoodImagesModal}
                deleteImage={deleteImageFromGood}
                makeImageAsChecked={makeImageAsMain}
                pathToImage={pathToImage}
            />
            <AddGoodImagesModal
                openAddGoodImagesModal={isOpenAddGoodImagesModal}
                closeAddGoodImagesModal={closeAddGoodImagesModal}
                images={images}
                addImagesToGood={addImagesToGood}
                uploadImageToServer={uploadImageToServer}
                addedImages={addedImages}
                pathToImage={pathToImage}
                imagesPerPage={imagesPerPage}
                changeImagesPerPage={changeImagesPerPage}
                isPaginationDisabled={isPaginationDisabled}
                totalPages={totalPages}
                currentPageNumber={currentPageNumber}
                paginationItemClick={paginationItemClick}
                deleteImageFromServer={deleteImageFromServer}
                isDeleteImageButtonDisabled={isDeleteImageButtonDisabled}
                modalTitle={imagesModalTitle}
                deleteImagesModalTitle={deleteImagesModalTitle}
                modalDescription={deleteImagesModalDescription}
                imagesPerPageText={imagesPerPageText}
                yesButtonTitle={yesButtonTitle}
                noButtonTitle={noButtonTitle}
            />
        </>
    )
}

export default MainTab
