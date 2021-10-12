import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import {
    getActiveSubMenu,
    getHeaderItems,
    setActiveSubMenu,
} from '../../reducers/headerSlice'
import { getStatisticsId } from '../../reducers/statisticsSlice'

const HeaderContainer = () => {
    const headerItems = useSelector(getHeaderItems)
    const activeSubMenu = useSelector(getActiveSubMenu)
    const statisticsId = useSelector(getStatisticsId)

    const dispatch = useDispatch()
    const setActiveSubmenu = id => {
        dispatch(setActiveSubMenu(id))
    }

    return (
        <Header
            headerItems={headerItems}
            activeSubMenu={activeSubMenu}
            setActiveSubMenu={setActiveSubmenu}
            statisticsId={statisticsId}
        />
    )
}

export default HeaderContainer
