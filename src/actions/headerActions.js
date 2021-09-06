import {SET_ACTIVE_SUBMENU} from "./actionTypes";


export const setActiveSubMenu = (id) => {
    return {
        type: SET_ACTIVE_SUBMENU,
        payload: id,
    }
}
