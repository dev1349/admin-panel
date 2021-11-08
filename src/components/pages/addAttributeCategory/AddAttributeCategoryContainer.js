import React from 'react'
import AddAttributesCategory from '../../organisms/forms/addAttributesCategory/AddAttributesCategory'
import {
    addedCategory,
    getCategoryFields,
    getFetchStatus,
    isButtonDisabled,
    isSaveButtonDisabled,
    notAddedCategory,
    postCategory,
    setAttributes,
} from '../../../reducers/addCategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loader from '../../molecules/loader/Loader'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'

const AddAttributeCategoryContainer = () => {
    const categoryFields = useSelector(getCategoryFields)
    const fetchStatus = useSelector(getFetchStatus)
    const isSaveDisabled = useSelector(isSaveButtonDisabled)
    const isReturnDisabled = useSelector(isButtonDisabled)

    const dispatch = useDispatch()
    const setCategoryAttributes = attribute => {
        dispatch(setAttributes(attribute))
    }
    const postCategoryAttributes = () => {
        dispatch(postCategory())
    }
    const handlerAddedCategory = () => {
        dispatch(addedCategory())
    }
    const handlerNotAddedCategory = () => {
        dispatch(notAddedCategory())
    }

    const history = useHistory()
    const handlerBack = () => {
        history.goBack()
    }

    return (
        <>
            <MaxWidthTemplate>
                <AddAttributesCategory
                    fieldsValues={categoryFields}
                    setFieldsValue={setCategoryAttributes}
                    onSave={postCategoryAttributes}
                    onReturn={handlerBack}
                    fetchStatus={fetchStatus}
                    isSaveButtonDisabled={isSaveDisabled}
                    isReturnButtonDisabled={isReturnDisabled}
                    modalsData={[
                        {
                            fetchStatus: 'error',
                            modalProperties: {
                                modalText:
                                    'Ошибка! Невозможно добавить категорию атрибутов(',
                                modalType: 'error',
                                action: handlerNotAddedCategory,
                            },
                        },
                        {
                            fetchStatus: 'success',
                            modalProperties: {
                                modalText:
                                    'Вы добавили новую категорию абтрибутов!',
                                modalType: 'success',
                                action: handlerAddedCategory,
                            },
                        },
                    ]}
                />
                {fetchStatus === 'pending' && <Loader />}
            </MaxWidthTemplate>
        </>
    )
}

export default AddAttributeCategoryContainer
