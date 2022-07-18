import React, { useCallback, useState } from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledTextFieldMultiline from '../../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import FlexFirstGrowTemplate from '../../../templates/flexFirstGrowTemplate/FlexFirstGrowTemplate'
import GreyBorderedWrapper from '../../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import UploadImageWithPreview from '../../../molecules/inputs/uploadImageWithPreview/UploadImageWithPreview'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import TextAlignRightTemplate from '../../../templates/textAlignRightTemplate/TextAlignRightTemplate'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import ButtonsRightTemplate from '../../../templates/buttonsRightTemplate/ButtonsRightTemplate'

const Delivery = ({ mainTitle, labelInput, labelMultiLine, addButtonLabel, saveButtonLabel }) => {
    const initialDeliveries = {
        delivery_1: {
            image: null,
            title: null,
            description: null,
        },
    }

    const [deliveries, setDeliveries] = useState(initialDeliveries)

    const handleChange = useCallback(
        deliveryName => payload => {
            setDeliveries(prev => ({
                ...prev,
                [deliveryName]: { ...prev[deliveryName], ...payload },
            }))
        },
        [setDeliveries]
    )

    const isAddDeliveryButtonDisabled = Object.keys(deliveries).reduce(
        (acc, cur) => Object.keys(deliveries[cur]).reduce((subAcc, subCur) => subAcc && !deliveries[cur][subCur], true) || acc,
        false
    )

    const handleAddDelivery = () => {
        setDeliveries(prev => {
            const newDeliveries = { ...prev }
            const NextDeliveryNumber = Math.max(...Object.keys(prev).map(key => Number(key.split('_')[1]))) + 1
            newDeliveries[`delivery_${NextDeliveryNumber}`] = {
                image: null,
                title: null,
                description: null,
            }
            return newDeliveries
        })
    }

    const handleDeleteDelivery = delivery => () => {
        console.log(delivery)
        setDeliveries(prev => {
            const newDeliveries = { ...prev }
            delete newDeliveries[delivery]
            return newDeliveries
        })
    }

    const isDeliveryDeleteButton = !!(Object.keys(deliveries).length - 1)

    const handleClearDeliveries = () => {
        setDeliveries(initialDeliveries)
    }

    const isClearButtonDisabled = () => {
        const deliveriesKeys = Object.keys(deliveries)
        return (
            deliveriesKeys.length === 1 &&
            deliveries[deliveriesKeys[0]].image === null &&
            deliveries[deliveriesKeys[0]].title === null &&
            deliveries[deliveriesKeys[0]].description === null
        )
    }

    const handleSaveDeliveries = () => {
        console.log('deliveries = ', deliveries)
    }

    const canSaveDeliveries = !isAddDeliveryButtonDisabled

    return (
        <>
            <H1>{mainTitle}</H1>

            {Object.keys(deliveries).map((delivery, index) => (
                <FlexFirstGrowTemplate noPadding alignItemsCenter noMargin key={delivery}>
                    <GreyBorderedWrapper topBottomMargin withPadding>
                        <LabeledTextField
                            id={`${delivery}_title`}
                            name={'title'}
                            label={labelInput + ' ' + (index + 1) + ':'}
                            value={deliveries[delivery]['title']}
                            onChange={handleChange(delivery)}
                        />
                        <LabeledTextFieldMultiline
                            id={`${delivery}_description`}
                            name={'description'}
                            label={labelMultiLine}
                            value={deliveries[delivery]['description']}
                            onChange={handleChange(delivery)}
                        />
                        <UploadImageWithPreview
                            name={'image'}
                            title={'Загрузить изображение'}
                            onChange={handleChange(delivery)}
                            img={deliveries[delivery]['image']}
                        />
                    </GreyBorderedWrapper>

                    {isDeliveryDeleteButton && (
                        <IconButton onClick={handleDeleteDelivery(delivery)}>
                            <DeleteIcon />
                        </IconButton>
                    )}
                </FlexFirstGrowTemplate>
            ))}

            <TextAlignRightTemplate>
                <SimpleButton startIcon={<AddIcon />} onClick={handleAddDelivery} disabled={isAddDeliveryButtonDisabled}>
                    {addButtonLabel}
                </SimpleButton>
            </TextAlignRightTemplate>

            <ButtonsRightTemplate>
                <SimpleButton
                    startIcon={<DeleteIcon />}
                    onClick={handleClearDeliveries}
                    variant={'outlined'}
                    disabled={isClearButtonDisabled()}
                >
                    Удалить
                </SimpleButton>
                <SimpleButton startIcon={<SaveIcon />} onClick={handleSaveDeliveries} disabled={!canSaveDeliveries}>
                    {saveButtonLabel}
                </SimpleButton>
            </ButtonsRightTemplate>
        </>
    )
}

export default Delivery
