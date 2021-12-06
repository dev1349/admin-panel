import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import NewOrderTable from '../../organisms/tables/newOrderTable/NewOrderTable'
import {
    changeClientDeliveryDateTime,
    changeClientFields,
    changeDeliveryPrice,
    changeDeliveryTypeAndPrice,
    changeGoodCountById,
    changeGoodPriceById,
    deleteGoodById,
    getCities,
    getClientFields,
    getDeliveryCurrentType,
    getDeliveryPrice,
    getDeliveryTypes,
    getGoodsInOrder,
    getHeaderCells,
    getTotalPrice,
} from '../../../reducers/newOrderSlice'
import { useDispatch, useSelector } from 'react-redux'
import ClientData from '../../organisms/clientData/ClientData'

const NewOrder = () => {
    const headerCells = useSelector(getHeaderCells)
    const goodsInOrder = useSelector(getGoodsInOrder)
    const deliveryTypes = useSelector(getDeliveryTypes)
    const deliveryPrice = useSelector(getDeliveryPrice)
    const totalPrice = useSelector(getTotalPrice)
    const deliveryCurrentType = useSelector(getDeliveryCurrentType)
    const clientFields = useSelector(getClientFields)
    const cities = useSelector(getCities)

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
        dispatch(changeDeliveryTypeAndPrice(payload))
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

    return (
        <MaxWidthTemplate>
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
        </MaxWidthTemplate>
    )
}

export default NewOrder
