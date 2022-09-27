import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import React from 'react'

const headLines = (isIndeterminate, isChecked, handleSelectAllGoods, t) => [
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
        content: t('goodListColumn01'),
        name: 'image',
        align: 'center',
        canSort: false,
    },
    {
        id: 2,
        content: t('goodListColumn02'),
        name: 'name',
        align: 'left',
        canSort: true,
    },

    {
        id: 3,
        content: t('goodListColumn03'),
        name: 'price',
        align: 'right',
        canSort: true,
    },
    {
        id: 4,
        content: t('goodListColumn04'),
        name: 'category',
        align: 'left',
        canSort: true,
    },
    {
        id: 5,
        content: t('goodListColumn05'),
        name: 'amount',
        align: 'right',
        canSort: true,
    },
    {
        id: 6,
        content: t('goodListColumn06'),
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
