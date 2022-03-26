import WSLabeledTextFieldMulti from '../../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import WSLabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'

import React from 'react'

const AddProduct = () => {
    return(
        <div className="wrapp">
            <WSLabeledTextField label='Наименование*'/>
            <WSLabeledTextFieldMulti label='Введите краткое описание '/>
            <WSLabeledTextFieldMulti label='Введите полное описание'/>
        </div>

    )
}

export default AddProduct