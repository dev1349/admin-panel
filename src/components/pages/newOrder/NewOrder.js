import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import NewOrderTable from '../../organisms/tables/newOrderTable/NewOrderTable'
import {
    addNewGoodToOrder,
    changeClientDeliveryDateTime,
    changeClientFields,
    changeDeliveryPrice,
    changeDeliveryType,
    changeGoodCountById,
    changeGoodPriceById,
    deleteDiscount,
    deleteGoodById,
    getCities,
    getClientFields,
    getCreationDate,
    getCurrentOrderStatus,
    getCurrentPaymentStatus,
    getDeliveryCurrentType,
    getDeliveryPrice,
    getDeliveryTypes,
    getDiscount,
    getDiscountSum,
    getGoodsInOrder,
    getHeaderCells,
    getIsPayed,
    getPaymentTypes,
    getSalesmanComment,
    getStatusTypes,
    getTotalPrice,
    resetNewOrder,
    setCreationDate,
    setCurrentOrderStatus,
    setCurrentPaymentStatus,
    setDiscount,
    setPayedStatus,
    setSalesmanComment,
} from '../../../reducers/newOrderSlice'
import { useDispatch, useSelector } from 'react-redux'
import ClientData from '../../organisms/clientData/ClientData'
import NewOrderHeader from '../../molecules/headers/newOrderHeader/newOrderHeader'
import { useHistory } from 'react-router-dom'
import OrderAdditionalButtons from '../../organisms/ordersAdditionalButtons/OrderAdditionalButtons'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import { getNamePriceGoods } from '../../../reducers/goodsSlice'
import OrderInfo from '../../organisms/forms/orderInfo/OrderInfo'
import SalesmanComment from '../../molecules/inputs/salesmanComment/SalesmanComment'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import PaddingBetweenButtonsTemplate from '../../templates/paddingBetweenButtonsTemplate/PaddingBetweenButtonsTemplate'
import Typography from '../../atoms/textElements/typography/Typography'
import useDeliveryTime from '../../../hooks/deliveryTime.hook'
import {
    dayNumber,
    hours,
    minutes,
    monthNumber,
    year,
} from '../../../common/getDayMonthYearHoursMinutes'

const NewOrder = () => {
    const headerCells = useSelector(getHeaderCells)
    const goodsInOrder = useSelector(getGoodsInOrder)
    const deliveryTypes = useSelector(getDeliveryTypes)
    const deliveryPrice = useSelector(getDeliveryPrice)
    const totalPrice = useSelector(getTotalPrice)
    const deliveryCurrentType = useSelector(getDeliveryCurrentType)
    const clientFields = useSelector(getClientFields)
    const cities = useSelector(getCities)
    const creationDate = useSelector(getCreationDate)
    const namePriceGoods = useSelector(getNamePriceGoods)
    const discount = useSelector(getDiscount)
    const currentOrderStatus = useSelector(getCurrentOrderStatus)
    const currentPaymentStatus = useSelector(getCurrentPaymentStatus)
    const statusTypes = useSelector(getStatusTypes)
    const paymentTypes = useSelector(getPaymentTypes)
    const isPayed = useSelector(getIsPayed)
    const salesmanComment = useSelector(getSalesmanComment)
    const discountSum = useSelector(getDiscountSum)
    const title = 'Информация о заказе'

    const {
        changeDeliveryFromHours,
        changeDeliveryFromMinutes,
        timeFromHoursItems,
        timeFromMinutesItems,
        timeToHoursItems,
        timeToMinutesItems,
        isFromHoursDisabled,
        isToHoursDisabled,
        isFromMinutesDisabled,
        isToMinutesDisabled,
    } = useDeliveryTime(clientFields, changeClientDeliveryDateTime)

    const dispatch = useDispatch()
    const changePrice = id => payload => {
        dispatch(
            changeGoodPriceById({
                id: id,
                price: payload.price,
            })
        )
    }
    const changeCount = id => payload => {
        dispatch(
            changeGoodCountById({
                id: id,
                count: payload.count,
            })
        )
    }
    const deleteCurrentGood = id => () => {
        dispatch(deleteGoodById(id))
    }
    const changeDelivery = payload => {
        dispatch(changeDeliveryType(payload))
    }
    const changeDeliveryCurrentPrice = payload => {
        dispatch(changeDeliveryPrice(payload))
    }
    const changeFields = payload => {
        dispatch(changeClientFields(payload))
    }
    const changeDeliveryDateTime = payload => {
        dispatch(changeClientDeliveryDateTime(payload))
    }

    let history = useHistory()
    const handleHeaderButtonClick = () => {
        history.push('/orders')
    }

    const handleAddGoodFromAutocomplete = id => () => {
        dispatch(addNewGoodToOrder(id))
    }
    const handleAddDiscount = payload => {
        dispatch(setDiscount(payload))
    }
    const handleDeleteDiscount = () => {
        dispatch(deleteDiscount())
    }
    const handleChangeSalesmanComment = payload => {
        dispatch(setSalesmanComment(payload.salesmanComment))
    }
    const handleCreateOrder = () => {
        dispatch(setCreationDate(Date.now()))
    }

    function orderStatusHandler(orderStatus) {
        dispatch(setCurrentOrderStatus(orderStatus.name))
    }
    function paymentStatusHandler(paymentStatus) {
        dispatch(setCurrentPaymentStatus(paymentStatus.name))
    }
    function payedStatusHandler(isPayed) {
        dispatch(setPayedStatus(isPayed.checked))
    }

    const dateForOutput = `${dayNumber(Date.now())}.${monthNumber(
        Date.now()
    )}.${year(Date.now())} ${hours(Date.now())}:${minutes(
        Date.now()
    )} Заказ создан пользователем`

    const resetOrder = () => {
        dispatch(resetNewOrder())
    }

    const isCreateOrderButtonDisabled =
        !goodsInOrder.length ||
        !clientFields.clientName ||
        !clientFields.clientPhone ||
        !clientFields.clientCity

    return (
        <MaxWidthTemplate>
            <NewOrderHeader
                headerText={'Новый заказ'}
                handleHeaderButtonClick={handleHeaderButtonClick}
            />
            <OrderAdditionalButtons
                buttons={{
                    position: {
                        icon: <AddIcon />,
                        text: 'Позиция',
                        value: 'check',
                    },
                    discount: {
                        icon: <AddIcon />,
                        text: 'Скидка',
                        value: 'check',
                    },
                }}
                namePriceGoods={namePriceGoods}
                addGoodFromAutocomplete={handleAddGoodFromAutocomplete}
                addGoodFromCatalog={() =>
                    console.log('Добавить заказ из каталога')
                }
                addDiscount={handleAddDiscount}
                hasDiscount={!!discount}
            />
            <NewOrderTable
                headerCells={headerCells}
                tableRows={goodsInOrder}
                deleteRow={deleteCurrentGood}
                changePrice={changePrice}
                changeCount={changeCount}
                deliveryTypes={deliveryTypes}
                deliveryCurrentType={deliveryCurrentType}
                changeDelivery={changeDelivery}
                changeDeliveryPrice={changeDeliveryCurrentPrice}
                deliveryPrice={deliveryPrice}
                totalPrice={totalPrice}
                discount={discount}
                deleteDiscount={handleDeleteDiscount}
                discountSum={discountSum}
            />
            <OrderInfo
                title={title.toUpperCase()}
                check={isPayed}
                checkboxHandler={payedStatusHandler}
                orderStatusHandler={orderStatusHandler}
                paymentStatusHandler={paymentStatusHandler}
                autoFocus={false}
                orderStatusItems={statusTypes}
                orderPaymentItems={paymentTypes}
                orderStatusValue={currentOrderStatus}
                orderPaymentValue={currentPaymentStatus}
            />
            <ClientData
                searchClients={() =>
                    console.log('open form with registered client')
                }
                changeFieldsValue={changeFields}
                clientFieldsValues={clientFields}
                fields={{
                    clientName: {
                        name: 'clientName',
                        label: 'Имя*',
                        placeholder: 'Имя*',
                    },
                    clientPhone: {
                        name: 'clientPhone',
                        label: 'Телефон*',
                        pattern: /^(\+?[0-9]*)$/,
                        helperText: 'Максимум 10 символов',
                        check: [
                            {
                                checking: value => {
                                    return value?.length < 5
                                },
                                attentionMessage: 'Введите минимум 5 символов',
                            },
                            {
                                checking: value => {
                                    return value?.length > 10
                                },
                                attentionMessage:
                                    'Введите не более 10 символов',
                            },
                        ],
                    },
                    clientEmail: {
                        name: 'clientEmail',
                        label: 'E-mail',
                        pattern: /^[\w-.@]*$/,
                    },
                    hasDelivery: {
                        name: 'hasDelivery',
                        label: 'Доставка не требуется',
                    },
                    clientAddress: {
                        name: 'clientAddress',
                        label: 'Адрес',
                        placeholder: 'Адрес',
                    },
                    clientCity: {
                        name: 'clientCity',
                        label: 'Населенный пункт*',
                        options: cities,
                    },
                    clientDeliveryDateTime: {
                        name: 'clientDeliveryDateTime',
                        label: 'Дата и время доставки',
                        date: {
                            id: '01',
                            name: 'date',
                            value: clientFields['clientDeliveryDateTime'][
                                'date'
                            ],
                            changeValue: changeDeliveryDateTime,
                        },
                        timeFrom: {
                            hours: {
                                name: 'timeFromHours',
                                items: timeFromHoursItems,
                                defaultLabel: '--',
                                isStartItemDisabled: true,
                                value: clientFields['clientDeliveryDateTime'][
                                    'timeFromHours'
                                ],
                                changeValue: changeDeliveryFromHours,
                                disabled: isFromHoursDisabled,
                            },
                            minutes: {
                                name: 'timeFromMinutes',
                                items: timeFromMinutesItems,
                                defaultLabel: '--',
                                isStartItemDisabled: true,
                                value: clientFields['clientDeliveryDateTime'][
                                    'timeFromMinutes'
                                ],
                                changeValue: changeDeliveryFromMinutes,
                                disabled: isFromMinutesDisabled,
                            },
                        },
                        timeTo: {
                            hours: {
                                name: 'timeToHours',
                                items: timeToHoursItems,
                                defaultLabel: '--',
                                isStartItemDisabled: true,
                                value: clientFields['clientDeliveryDateTime'][
                                    'timeToHours'
                                ],
                                changeValue: changeDeliveryDateTime,
                                disabled: isToHoursDisabled,
                            },
                            minutes: {
                                name: 'timeToMinutes',
                                items: timeToMinutesItems,
                                defaultLabel: '--',
                                isStartItemDisabled: true,
                                value: clientFields['clientDeliveryDateTime'][
                                    'timeToMinutes'
                                ],
                                changeValue: changeDeliveryDateTime,
                                disabled: isToMinutesDisabled,
                            },
                        },
                    },
                    clientComment: {
                        name: 'clientComment',
                        label: 'Комментарий покупателя',
                    },
                }}
            />
            <SalesmanComment
                label={'Комментарии продавца'}
                name={'salesmanComment'}
                value={salesmanComment}
                onChange={handleChangeSalesmanComment}
            />
            {creationDate && <Typography>{dateForOutput}</Typography>}
            {!creationDate && (
                <PaddingBetweenButtonsTemplate>
                    <SimpleButton
                        onClick={handleCreateOrder}
                        disabled={isCreateOrderButtonDisabled}
                    >
                        Создать заказ
                    </SimpleButton>
                    <SimpleButton variant={'outlined'} onClick={resetOrder}>
                        Сбросить
                    </SimpleButton>
                </PaddingBetweenButtonsTemplate>
            )}
        </MaxWidthTemplate>
    )
}

export default NewOrder
