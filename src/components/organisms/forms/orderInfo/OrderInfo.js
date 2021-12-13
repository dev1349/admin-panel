import React from 'react'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import Header2 from '../../../molecules/headers/header2/Header2'
import GreyBorderedWrapper from '../../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import LabeledSelectField from '../../../molecules/inputs/labeledSelectField/LabeledSelectField'
import LabeledCheckboxField from '../../../molecules/inputs/lableCheckboxField/LabeledCheckboxField'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import FixedWidthContainerTemplate from '../../../templates/fixedWidthContainerTemplate/FixedWidthContainerTemplate'
import PaddingWidthContainerTemplate from '../../../templates/paddingWidthContainerTemplate/PaddingWidthContainerTemplate'

const OrderInfo = ({
    title,
    checked,
    checkboxHandler,
    orderStatusHandler,
    autoFocus,
    orderStatusItems,
    orderPaymentItems,
    orderStatusValue,
    orderPaymentValue,
    isStartItemDisabled,
    paymentStatusHandler,
}) => {
    return (
        <GreyBorderedWrapper>
            <Header2>{title}</Header2>
            <PaddingTemplate>
                <LabeledSelectField
                    id={'orderStatus'}
                    label={'Статус заказа'}
                    name={'name'}
                    value={orderStatusValue}
                    onChange={orderStatusHandler}
                    autoFocus={autoFocus}
                    items={orderStatusItems}
                    isStartItemDisabled={isStartItemDisabled}
                    alignLeft={true}
                    fixedWidthWithMarginRight={true}
                />
                <FlexTemplate>
                    <FixedWidthContainerTemplate>
                        <LabeledSelectField
                            id={'paymentStatus'}
                            label={'Статус оплаты'}
                            name={'name'}
                            value={orderPaymentValue}
                            onChange={paymentStatusHandler}
                            autoFocus={autoFocus}
                            items={orderPaymentItems}
                            isStartItemDisabled={isStartItemDisabled}
                            alignLeft={true}
                        />
                    </FixedWidthContainerTemplate>
                    <PaddingWidthContainerTemplate>
                        <LabeledCheckboxField
                            id={'checkPayed'}
                            name={'checked'}
                            label={'уже оплачен'}
                            checked={checked}
                            onChange={checkboxHandler}
                            alignLeft={true}
                        />
                    </PaddingWidthContainerTemplate>
                </FlexTemplate>
            </PaddingTemplate>
        </GreyBorderedWrapper>
    )
}

export default OrderInfo
