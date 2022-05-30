import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import React from 'react'

const headLines = (isIndeterminate, isChecked, handleSelectAllCharacteristic) => [
    {
        id: 0,
        content: (
            <Checkbox
                dialogCheckbox
                disableRipple
                indeterminate={isIndeterminate}
                checked={isChecked}
                onChange={handleSelectAllCharacteristic}
            />
        ),
        name: 'checkbox',
        align: 'left',
        canSort: false,
    },
    {
        id: 1,
        content: 'Название',
        name: 'name',
        align: 'left',
        canSort: true,
    },
    {
        id: 2,
        content: 'Порядок',
        name: 'orderNumber',
        align: 'right',
        canSort: true,
    },
    {
        id: 3,
        content: 'Для админа',
        name: 'isAdminOnly',
        align: 'center',
        canSort: true,
    },
    {
        id: 4,
        content: 'Характеристики',
        name: 'characteristicSet',
        align: 'left',
        canSort: false,
    },
    {
        id: 5,
        content: '',
        align: 'right',
    },
]

export default headLines
