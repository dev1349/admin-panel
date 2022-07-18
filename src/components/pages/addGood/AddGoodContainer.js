import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postGood } from '../../../reducers/goodsSlice'
import { allGoodType } from '../../../reducers/goodTypeSlice'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddGood from '../../organisms/addGood/AddGood'
import Typography from '../../atoms/textElements/typography/Typography'

const AddGoodContainer = () => {
    const tabTitles = [
        'Общие',
        'Данные',
        'Связи',
        'Атрибуты',
        'Опции',
        'Регулярные платежи',
        'Скидки',
        'Акции',
        'Изображения',
        'Бонусные балы',
        'Дизайн',
        'Дополнительные вкладки',
    ]

    const initialGoodParameters = {
        name: null,
        description: null,
        isInStock: 'inStock',
        unitLength: 'centimeter',
        unitWeight: 'kilograms',
        status: 'turnOn',
    }

    const [goodParameters, setGoodParameters] = useState(initialGoodParameters)

    const allGoodTypes = useSelector(allGoodType)

    const isGoodTypesNotEmpty = allGoodTypes?.length

    const dispatch = useDispatch()

    const addGood = good => {
        good && dispatch(postGood(good))
    }

    // TODO uncomment when goodtype will be at the backend
    // useEffect(() => {
    //     const getAllGoodTypes = () => {
    //         dispatch(getAllGoodType())
    //     }
    //     getAllGoodTypes()
    // }, [dispatch])

    const handleChange = payload => {
        setGoodParameters({
            ...goodParameters,
            ...payload,
        })
    }

    const handleSubmit = () => {
        addGood(goodParameters)
    }

    return (
        <MaxWidthTemplate>
            {isGoodTypesNotEmpty ? (
                <AddGood
                    tabTitles={tabTitles}
                    allGoodType={allGoodTypes}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={goodParameters}
                />
            ) : (
                <Typography>Нет типов товаров..(</Typography>
            )}
        </MaxWidthTemplate>
    )
}

export default AddGoodContainer
