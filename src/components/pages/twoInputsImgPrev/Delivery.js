import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import Delivery from '../../organisms/forms/twoInputsImgPrev/TwoInputsImgPrev'

const DeliveryPage = () => {
    return (
        <MaxWidthTemplate>
            <Delivery
                mainTitle="Доставка"
                labelInput="Способ доставки"
                labelMultiLine="Описание доставки:"
                addButtonLabel="Добавить способ доставки"
                saveButtonLabel="Сохранить доставки"
            />
        </MaxWidthTemplate>
    )
}

export default DeliveryPage
