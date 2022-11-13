import React from 'react'
import Delivery from '../../organisms/forms/twoInputsImgPrev/TwoInputsImgPrev'

const CheckoutPage = () => {
    return (
        <Delivery
            mainTitle="Оплата"
            labelInput="Способ оплаты"
            labelMultiLine="Описание оплаты:"
            addButtonLabel="Добавить способ оплаты"
            saveButtonLabel="Сохранить оплаты"
        />
    )
}

export default CheckoutPage
