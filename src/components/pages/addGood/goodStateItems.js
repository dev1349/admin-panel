const getGoodStateItems = t => [
    { id: 0, label: t('goodStateInStock'), value: 'IN_STOCK' },
    { id: 1, label: t('goodStateNotInStock'), value: 'NOT_IN_STOCK' },
    { id: 2, label: t('goodStateUnderTheOrder'), value: 'UNDER_THE_ORDER' },
    { id: 3, label: t('goodStateDeliveryIsExpected'), value: 'DELIVERY_IS_EXPECTED' },
    { id: 4, label: t('goodStateIsRunningOut'), value: 'IS_RUNNING_OUT' },
]

export default getGoodStateItems
