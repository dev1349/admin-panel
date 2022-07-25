import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import React from 'react'

const headLines = (isIndeterminate, isChecked, handleSelectAllGoods) => [
    {
        id: 0,
        content: (
            <Checkbox dialogCheckbox disableRipple indeterminate={isIndeterminate} checked={isChecked} onChange={handleSelectAllGoods} />
        ),
        name: 'checkbox',
        align: 'left',
        canSort: false,
    },
    {
        id: 1,
        content: 'Изображение',
        name: 'image',
        align: 'center',
        canSort: false,
    },
    {
        id: 2,
        content: 'Название',
        name: 'name',
        align: 'left',
        canSort: true,
    },

    {
        id: 3,
        content: 'Цена',
        name: 'price',
        align: 'right',
        canSort: true,
    },
    {
        id: 4,
        content: 'Категория',
        name: 'category',
        align: 'left',
        canSort: true,
    },
    {
        id: 5,
        content: 'Количество',
        name: 'amount',
        align: 'right',
        canSort: true,
    },
    {
        id: 6,
        content: 'Состояние',
        name: 'goodState',
        align: 'left',
        canSort: true,
    },
    {
        id: 7,
        content: '',
        align: 'right',
    },
]

export default headLines
