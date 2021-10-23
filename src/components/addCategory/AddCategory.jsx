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
    addedCategory,
    notAddedCategory,
    notFillRequireFields,
    goBack,
}) => {
    const tabTitleClickHandler = titleId => () => {
        onTabTitleClick(titleId)
    }

    const subTabTitleClickHandler = subTitleId => () => {
        onSubTabTitleClick(subTitleId)
    }

    return (
        <div className={'addCategory--wrapper'}>
            {fetchStatus === 'pending' && <Loader />}

            {fetchStatus === 'error' && (
                <Modal
                    message={'Ошибка добавления категории'}
                    action={notAddedCategory}
                />
            )}

            {fetchStatus === 'success' && (
                <Modal
                    message={'Категория успешно добавлена!'}
                    action={addedCategory}
                />
            )}

            {fetchStatus === 'required' && (
                <Modal
                    message={'Обязательные поля не заполенны!'}
                    action={notFillRequireFields}
                />
            )}

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
                    disabled={fetchStatus === 'pending'}
                    title={'Return'}
                />
            </div>
            <div className="addCategory--body">
                <h2 className="addCategory--subTitle">Добавление категории</h2>
                <div className="addCategory--tabs">
                    <ul className="addCategory--tabTitleList">
                        {tabs.map(el => (
                            <TabTitle
                                key={el.id}
                                title={el.title}
                                isTabActive={el.id === activeTabs}
                                onClickHandler={tabTitleClickHandler(el.id)}
                            />
                        ))}
                    </ul>
                    <ul className="addCategory--tabContainerList">
                        {activeTabs === 0 && (
                            <TabContent>
                                <div className="addCategory--tabs">
                                    <ul className="addCategory--tabTitleList">
                                        {subTabs.map(el => (
                                            <TabTitle
                                                key={el.id}
                                                title={el.title}
                                                isTabActive={
                                                    el.id === activeSubTabs
                                                }
                                                onClickHandler={subTabTitleClickHandler(
                                                    el.id
                                                )}
                                            />
                                        ))}
                                    </ul>
                                    <ul className="addCategory--tabContainerList">
                                        {activeSubTabs === 0 && (
                                            <TabContent>
                                                <InputField
                                                    type={'input'}
                                                    typeOfInput={'text'}
                                                    name={'name'}
                                                    label={
                                                        '* Название категории:'
                                                    }
                                                    id={'name'}
                                                    value={
                                                        categoryFields['name']
                                                    }
                                                    onChange={
                                                        setCategoryAttributes
                                                    }
                                                />
                                                <InputField
                                                    type={'textarea'}
                                                    name={'description'}
                                                    label={'Описание:'}
                                                    id={'categoryDescription'}
                                                    value={
                                                        categoryFields[
                                                            'description'
                                                        ]
                                                    }
                                                    onChange={
                                                        setCategoryAttributes
                                                    }
                                                />
                                            </TabContent>
                                        )}

                                        {activeSubTabs === 1 && (
                                            <TabContent>
                                                <InputField
                                                    type={'input'}
                                                    typeOfInput={'text'}
                                                    name={'englishName'}
                                                    label={
                                                        '* Name of category:'
                                                    }
                                                    id={'categoryNameEnglish'}
                                                    value={
                                                        categoryFields[
                                                            'englishName'
                                                        ]
                                                    }
                                                    onChange={
                                                        setCategoryAttributes
                                                    }
                                                />
                                                <InputField
                                                    type={'textarea'}
                                                    name={'englishDescription'}
                                                    label={
                                                        'Categories description:'
                                                    }
                                                    id={
                                                        'categoryDescriptionEnglish'
                                                    }
                                                    value={
                                                        categoryFields[
                                                            'englishDescription'
                                                        ]
                                                    }
                                                    onChange={
                                                        setCategoryAttributes
                                                    }
                                                />
                                            </TabContent>
                                        )}
                                    </ul>
                                </div>
                            </TabContent>
                        )}

                        {activeTabs === 1 && (
                            <TabContent>Some fields</TabContent>
                        )}

                        {activeTabs === 2 && (
                            <TabContent>Again some fields)</TabContent>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AddCategory
