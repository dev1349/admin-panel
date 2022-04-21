import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import Delivery from '../../organisms/forms/twoInputsImgPrev/TwoInputsImgPrev'

const CheckoutPage = () => {
    return (
        <MaxWidthTemplate>
            <Delivery
                mainTitle="Оплата"
                labelInput="Способ оплаты"
                labelMultiLine="Описание оплаты:"
                addButtonLabel="Добавить способ оплаты"
                saveButtonLabel="Сохранить оплаты"
            />
        </MaxWidthTemplate>
    )
}

export default CheckoutPage
