import React from 'react'
import Delivery from '../../organisms/forms/twoInputsImgPrev/TwoInputsImgPrev'

const DeliveryPage = () => {
    return (
        <Delivery
            mainTitle="Доставка"
            labelInput="Способ доставки"
            labelMultiLine="Описание доставки:"
            addButtonLabel="Добавить способ доставки"
            saveButtonLabel="Сохранить доставки"
        />
    )
}

export default DeliveryPage
