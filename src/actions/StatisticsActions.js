import {CHANGE_STATUS_STATISTICS} from "./actionTypes";


export const setActiveStatistics = (status) => {
    return {
        type: CHANGE_STATUS_STATISTICS,
        payload: status,
    }
}
