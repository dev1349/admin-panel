import { fillTimeItems } from '../common/fillTimeItems'
import { useDispatch } from 'react-redux'

const useDeliveryTime = (clientFields, changeClientDeliveryDateTime) => {
    const timeFromHoursValue =
        clientFields['clientDeliveryDateTime']['timeFromHours']
    const timeFromMinutesValue =
        clientFields['clientDeliveryDateTime']['timeFromMinutes']
    const timeToHoursValue =
        clientFields['clientDeliveryDateTime']['timeToHours']
    const timeToMinutesValue =
        clientFields['clientDeliveryDateTime']['timeToMinutes']
    const date = clientFields['clientDeliveryDateTime']['date']

    const dispatch = useDispatch()

    const changeDeliveryFromHours = payload => {
        if (
            Number(payload.timeFromHours) === 23 &&
            Number(timeFromMinutesValue) === 59
        ) {
            dispatch(
                changeClientDeliveryDateTime({
                    timeFromMinutes: 58,
                    timeToHours: 23,
                    timeToMinutes: 59,
                    ...payload,
                })
            )
            return
        }

        if (
            timeToHoursValue &&
            Number(payload.timeFromHours) > Number(timeToHoursValue) &&
            Number(timeFromMinutesValue) > Number(timeToMinutesValue)
        ) {
            dispatch(
                changeClientDeliveryDateTime({
                    timeToHours: Number(payload.timeFromHours) + 1,
                })
            )
        }

        if (
            timeToHoursValue &&
            Number(payload.timeFromHours) > Number(timeToHoursValue) &&
            Number(timeFromMinutesValue) < Number(timeToMinutesValue)
        ) {
            dispatch(
                changeClientDeliveryDateTime({
                    timeToHours: Number(payload.timeFromHours),
                })
            )
        }

        dispatch(changeClientDeliveryDateTime(payload))
    }

    const changeDeliveryFromMinutes = payload => {
        if (
            Number(timeFromHoursValue) === Number(timeToHoursValue) &&
            Number(payload.timeFromMinutes) >= Number(timeToMinutesValue)
        ) {
            if (Number(payload.timeFromMinutes) === 59) {
                dispatch(
                    changeClientDeliveryDateTime({
                        timeToHours: Number(timeToHoursValue) + 1,
                    })
                )
            } else if (
                Number(timeFromHoursValue) === Number(timeToHoursValue)
            ) {
                dispatch(
                    changeClientDeliveryDateTime({
                        timeToMinutes: Number(payload.timeFromMinutes) + 1,
                    })
                )
            }
        }

        dispatch(changeClientDeliveryDateTime(payload))
    }

    const timeFromHoursItems = fillTimeItems('timeFromHours')
    const timeFromMinutesEndValue = Number(timeFromHoursValue) === 23 ? 58 : 59
    const timeFromMinutesItems = fillTimeItems(
        'timeFromMinutes',
        0,
        timeFromMinutesEndValue
    )

    const timeToHoursStartValue = () => {
        if (
            timeFromMinutesValue &&
            timeToMinutesValue &&
            Number(timeFromMinutesValue) >= Number(timeToMinutesValue)
        ) {
            return Number(timeFromHoursValue) + 1
        }

        if (
            timeFromMinutesValue &&
            timeToMinutesValue &&
            Number(timeFromMinutesValue) < Number(timeToMinutesValue)
        ) {
            return Number(timeFromHoursValue)
        }

        if (!timeFromMinutesValue && !timeToMinutesValue) {
            return Number(timeFromHoursValue)
        }

        if (timeFromHoursValue && timeFromMinutesValue) {
            return Number(timeFromHoursValue) + 1
        }

        return 0
    }
    const timeToHoursItems = fillTimeItems(
        'timeFromHours',
        timeToHoursStartValue()
    )
    const timeToMinutesStartValue = () => {
        if (Number(timeFromMinutesValue) === 59) {
            return 0
        }

        if (Number(timeToHoursValue) > Number(timeFromHoursValue)) {
            return 0
        }

        if (Number(timeToHoursValue) <= Number(timeFromHoursValue)) {
            return Number(timeFromMinutesValue) + 1
        }

        return 0
    }
    const timeToMinutesItems = fillTimeItems(
        'timeFromMinutes',
        timeToMinutesStartValue(),
        59
    )

    const isFromHoursDisabled = !date
    const isToHoursDisabled = !timeFromHoursValue
    const isFromMinutesDisabled = !timeFromHoursValue
    const isToMinutesDisabled = !timeFromMinutesValue

    return {
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
    }
}

export default useDeliveryTime
