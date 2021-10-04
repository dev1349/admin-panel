import React, {useState} from 'react'
import AddCategory from './AddCategory'
import {
    addedCategory,
    getCategoryFields,
    getFetchStatus,
    notAddedCategory, notFillRequireFields,
    postCategory,
    setAttributes
} from '../../reducers/addCategorySlice'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


const AddCategoryContainer = () => {
    const tabs = {
        tabs: [
            {
                id: 0,
                title: 'Общие',
            },
            {
                id: 1,
                title: 'Дизайн',
            },
            {
                id: 2,
                title: 'Данные',
            }
        ],
        subTabs: [
            {
                id: 0,
                title: 'Russian'
            },
            {
                id: 1,
                title: 'English'
            }
        ],
    }

    const [activeTabs, setActiveTabs] = useState(0)
    const [activeSubTabs, setActiveSubTabs] = useState(0)

    const tabTitleClickHandler = (tabId) => {
        setActiveTabs(tabId)
    }
    const subTabTitleClickHandler = (subTabId) => {
        setActiveSubTabs(subTabId)
    }

    const categoryFields = useSelector(getCategoryFields)
    const fetchStatus = useSelector(getFetchStatus)

    const dispatch = useDispatch()
    const setCategoryAttributes = attribute => {
        dispatch(setAttributes(attribute))
    }
    const postCategoryAttributes = () => {
        dispatch(postCategory())
    }
    const addedCategoryHandler = () => {
        dispatch(addedCategory())
    }
    const notAddedCategoryHandler = () => {
        dispatch(notAddedCategory())
    }
    const notFillRequireFieldsHandler = () => {
        dispatch(notFillRequireFields())
    }

    const history = useHistory()
    const goBackHandler = () => {
        history.goBack()
    }


    return (
        <AddCategory
            tabs={tabs.tabs}
            subTabs={tabs.subTabs}
            activeTabs={activeTabs}
            activeSubTabs={activeSubTabs}
            onTabTitleClick={tabTitleClickHandler}
            onSubTabTitleClick={subTabTitleClickHandler}
            categoryFields={categoryFields}
            setCategoryAttributes={setCategoryAttributes}
            postCategory={postCategoryAttributes}
            fetchStatus={fetchStatus}
            addedCategory={addedCategoryHandler}
            notAddedCategory={notAddedCategoryHandler}
            notFillRequireFields={notFillRequireFieldsHandler}
            goBack={goBackHandler}
        />
    )
}

export default AddCategoryContainer