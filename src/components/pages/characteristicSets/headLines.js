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
        content: 'Характеристики',
        name: 'characteristics',
        align: 'left',
        canSort: false,
    },
    {
        id: 3,
        content: '',
        align: 'right',
    },
]

export default headLines
