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

    const fillHoursItems = (items, name) => {
        for (let i = 0; i <= 23; i++) {
            items.push({
                id: `${name}${i}`,
                label: `${i}`,
                value: `${i}`,
            })
        }
    }

    const fillMinutesItems = (items, name) => {
        for (let i = 1; i <= 59; i++) {
            items.push({
                id: `${name}${i}`,
                label: `${i}`,
                value: `${i}`,
            })
        }
    }

    const timeFromHoursItems = []
    fillHoursItems(timeFromHoursItems, 'timeFromHours')

    const timeFromMinutesItems = []
    fillMinutesItems(timeFromMinutesItems, 'timeFromMinutes')

    const timeToHoursItems = []
    fillHoursItems(timeToHoursItems, 'timeFromHours')

    const timeToMinutesItems = []
    fillMinutesItems(timeToMinutesItems, 'timeFromMinutes')

    let history = useHistory()
    const handleHeaderButtonClick = () => {
        history.push('/orders')
    }

    const namePriceGoods = useSelector(getNamePriceGoods)

    const handleAddGoodFromAutocomplete = id => () => {
        dispatch(addNewGoodToOrder(id))
    }

    const handleAddDiscount = payload => {
        dispatch(setDiscount(payload))
    }

    const discount = useSelector(getDiscount)

    const handleDeleteDiscount = () => {
        dispatch(deleteDiscount())
    }

    const discountSum = useSelector(getDiscountSum)

    const currentOrderStatus = useSelector(getCurrentOrderStatus)
    const currentPaymentStatus = useSelector(getCurrentPaymentStatus)
    const statusTypes = useSelector(getStatusTypes)
    const paymentTypes = useSelector(getPaymentTypes)
    const isPayed = useSelector(getIsPayed)

    const title = 'Информация о заказе'

    function orderStatusHandler(orderStatus) {
        dispatch(setCurrentOrderStatus(orderStatus.name))
    }

    function paymentStatusHandler(paymentStatus) {
        dispatch(setCurrentPaymentStatus(paymentStatus.name))
    }

    function payedStatusHandler(isPayed) {
        dispatch(setPayedStatus(isPayed.checked))
    }

    const salesmanComment = useSelector(getSalesmanComment)

    const handleChangeSalesmanComment = payload => {
        dispatch(setSalesmanComment(payload.salesmanComment))
    }

    const handleCreateOrder = () => {
        dispatch(setCreationDate(Date.now()))
    }

    const dateOfCreateOrder = new Date(creationDate)
    const dayNumber =
        dateOfCreateOrder.getDate() < 10
            ? '0' + dateOfCreateOrder.getDate()
            : dateOfCreateOrder.getDate()
    const monthNumber =
        dateOfCreateOrder.getMonth() + 1 < 10
            ? '0' + (dateOfCreateOrder.getMonth() + 1)
            : dateOfCreateOrder.getMonth()
    const year = dateOfCreateOrder.getFullYear()
    const hours =
        dateOfCreateOrder.getHours() < 10
            ? '0' + dateOfCreateOrder.getHours()
            : dateOfCreateOrder.getHours()
    const minutes =
        dateOfCreateOrder.getMinutes() < 10
            ? '0' + dateOfCreateOrder.getMinutes()
            : dateOfCreateOrder.getMinutes()
    const dateForOutput = `${dayNumber}.${monthNumber}.${year} ${hours}:${minutes} Заказ создан пользователем`

    const resetOrder = () => {
        dispatch(resetNewOrder())
    }

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
                        pattern: /^(|\+[0-9]*|[0-9]*)$/,
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
                        pattern:
                            /^(|[a-z]\w*|[A-Z]\w*|[a-z]\w*@\w*|[A-Z]\w*@\w*|[a-z]\w*@\w*\.\w*|[A-Z]\w*@\w*\.\w*)$/,
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
                                changeValue: changeDeliveryDateTime,
                            },
                            minutes: {
                                name: 'timeFromMinutes',
                                items: timeFromMinutesItems,
                                defaultLabel: '--',
                                isStartItemDisabled: true,
                                value: clientFields['clientDeliveryDateTime'][
                                    'timeFromMinutes'
                                ],
                                changeValue: changeDeliveryDateTime,
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
                    <SimpleButton onClick={handleCreateOrder}>
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
