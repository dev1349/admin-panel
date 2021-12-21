import React, { useEffect } from 'react'
import EditGood from '../../organisms/forms/editGood/EditGood'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeEditGoodFields,
    getEditGoodFields,
    isGoodInAllGoods,
    isSaveDisabled,
    saveGoodFieldsValues,
    setEditGoodStartFieldValues,
} from '../../../reducers/goodsSlice'
import { useHistory, useParams } from 'react-router-dom'

const EditGoodPage = () => {
    const editGoodFields = useSelector(getEditGoodFields)

    const dispatch = useDispatch()
    const changeEditGoodFieldValue = payload => {
        dispatch(changeEditGoodFields(payload))
    }

    const { goodId } = useParams()
    const isGoodInStore = useSelector(isGoodInAllGoods(goodId))
    useEffect(() => {
        if (isGoodInStore) {
            dispatch(setEditGoodStartFieldValues(goodId))
        }
    }, [dispatch])

    const history = useHistory()
    const saveEditGoodFieldValue = () => {
        dispatch(saveGoodFieldsValues(goodId))
        history.push('/myGoodsList')
    }

    const isSaveButtonDisabled = useSelector(isSaveDisabled(goodId))

    return (
        <MaxWidthTemplate>
            {isGoodInStore ? (
                <EditGood
                    name={{
                        id: 'goodName',
                        label: 'Наименование*',
                        name: 'name',
                        value: editGoodFields['name'],
                        onChange: changeEditGoodFieldValue,
                        autoFocus: true,
                    }}
                    description={{
                        id: 'goodDescription',
                        label: 'Описание',
                        name: 'description',
                        value: editGoodFields['description'],
                        onChange: changeEditGoodFieldValue,
                    }}
                    htmlTitle={{
                        id: 'goodHtmlTitle',
                        label: 'HTML-тег title',
                        name: 'htmlTitle',
                        value: editGoodFields['htmlTitle'],
                        onChange: changeEditGoodFieldValue,
                    }}
                    htmlH1={{
                        id: 'goodHtmlH1',
                        label: 'HTML-тег h1',
                        name: 'htmlH1',
                        value: editGoodFields['htmlH1'],
                        onChange: changeEditGoodFieldValue,
                    }}
                    metaDescription={{
                        id: 'goodMetaDescription',
                        label: 'Мета тег description',
                        name: 'metaDescription',
                        value: editGoodFields['metaDescription'],
                        onChange: changeEditGoodFieldValue,
                    }}
                    metaKeywords={{
                        id: 'goodMetaKeywords',
                        label: 'Мета тег description',
                        name: 'metaKeywords',
                        value: editGoodFields['metaKeywords'],
                        onChange: changeEditGoodFieldValue,
                    }}
                    saveGood={saveEditGoodFieldValue}
                    isSaveButtonDisabled={isSaveButtonDisabled}
                />
            ) : (
                <div>Запрашиваемый вами товар не найден...(</div>
            )}
        </MaxWidthTemplate>
    )
}

export default EditGoodPage
