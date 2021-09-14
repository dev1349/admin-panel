import React from 'react'
import './AddCategory.sass'
import TabTitle from './TabTitle'
import TabContent from './TabContent'
import InputField from './InputField'
import Loader from './loader/Loader'
import Modal from './modal/Modal'
import Button from './button/Button'


const AddCategory = ({
                         tabs,
                         subTabs,
                         activeTabs,
                         activeSubTabs,
                         onTabTitleClick,
                         onSubTabTitleClick,
                         categoryFields,
                         setCategoryAttributes,
                         postCategory,
                         fetchStatus,
                         changeFetchStatus,
                         resetCategory,
                         goBack
                     }) => {

    const tabTitleClickHandler = (titleId) => () => {
        onTabTitleClick(titleId)
    }

    const subTabTitleClickHandler = (subTitleId) => () => {
        onSubTabTitleClick(subTitleId)
    }

    const setFetchStatusIdleHandler = () => {
        changeFetchStatus('idle')
    }

    const resetCategoryHandler = () => {
        resetCategory()
    }

    return (
        <div className={"addCategory--container"}>

            {fetchStatus === 'pending' && <Loader/>}

            {fetchStatus === 'error' && (<Modal
                message={'Error to add Category'}
                action={setFetchStatusIdleHandler}
            />)}

            {fetchStatus === 'success' && (<Modal
                message={'Success to add Category'}
                action={resetCategoryHandler}
            />)}

            <div className="addCategory--header">
                <h1 className="addCategory--title">Категории</h1>

                <Button
                    className="addCategory--save"
                    onClick={postCategory}
                    disabled={fetchStatus === 'pending'}
                    title={'Save'}
                />

                <Button
                    className="addCategory--return"
                    onClick={goBack}
                    disabled={null}
                    title={'Return'}
                />

            </div>
            <div className="addCategory--body">
                <h2 className="addCategory--subTitle">Добавление категории</h2>
                <div className="addCategory--tabs">
                    <ul className="addCategory--tabTitleList">

                        {tabs.map(el => <TabTitle
                            key={el.id}
                            title={el.title}
                            isTabActive={el.id === activeTabs}
                            onClickHandler={tabTitleClickHandler(el.id)}
                        />)}

                    </ul>
                    <ul className="addCategory--tabContainerList">

                        {activeTabs === 0 && <TabContent>
                            <div className="addCategory--tabs">
                                <ul className="addCategory--tabTitleList">

                                    {subTabs.map(el => <TabTitle
                                        key={el.id}
                                        title={el.title}
                                        isTabActive={el.id === activeSubTabs}
                                        onClickHandler={subTabTitleClickHandler(el.id)}
                                    />)}

                                </ul>
                                <ul className="addCategory--tabContainerList">

                                    {activeSubTabs === 0 && <TabContent>
                                        <InputField
                                            type={'input'}
                                            typeOfInput={'text'}
                                            name={'categoryName'}
                                            label={'* Название категории:'}
                                            id={'categoryName'}
                                            value={categoryFields['categoryName']}
                                            onChange={setCategoryAttributes}
                                        />
                                        <InputField
                                            type={'textarea'}
                                            name={'categoryDescription'}
                                            label={'Описание:'}
                                            id={'categoryDescription'}
                                            value={categoryFields['categoryDescription']}
                                            onChange={setCategoryAttributes}
                                        />
                                    </TabContent>}

                                    {activeSubTabs === 1 && <TabContent>
                                        <InputField
                                            type={'input'}
                                            typeOfInput={'text'}
                                            name={'categoryNameEnglish'}
                                            label={'* Name of category:'}
                                            id={'categoryNameEnglish'}
                                            value={categoryFields['categoryNameEnglish']}
                                            onChange={setCategoryAttributes}
                                        />
                                        <InputField
                                            type={'textarea'}
                                            name={'categoryDescriptionEnglish'}
                                            label={'Categories description:'}
                                            id={'categoryDescriptionEnglish'}
                                            value={categoryFields['categoryDescriptionEnglish']}
                                            onChange={setCategoryAttributes}
                                        />
                                    </TabContent>}
                                </ul>
                            </div>
                        </TabContent>}

                        {activeTabs === 1 && <TabContent>
                            Some fields
                        </TabContent>}

                        {activeTabs === 2 && <TabContent>
                            Again some fields)
                        </TabContent>}

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default AddCategory