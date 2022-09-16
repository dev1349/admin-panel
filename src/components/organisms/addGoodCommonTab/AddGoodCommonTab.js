import React from 'react'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledSelectField from '../../molecules/inputs/labeledSelectField/LabeledSelectField'
import LabeledFloatField from '../../molecules/inputs/labeledFloatField/LabeledFloatField'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'

const AddGoodCommonTab = ({ values, handleChange, allGoodType }) => {
    return (
        <PaddingTemplate>
            <LabeledTextField
                id={'goodField01'}
                label={'Название'}
                name={'name'}
                value={values['name'] || ''}
                onChange={handleChange}
                autoFocus={true}
            />
            <LabeledTextField
                id={'goodField02'}
                label={'Описание'}
                name={'description'}
                value={values['description'] || ''}
                onChange={handleChange}
            />
            <LabeledSelectField
                id={'goodField03'}
                label={'Тип'}
                name={'type'}
                value={values['type'] || ''}
                onChange={handleChange}
                items={allGoodType.map((item, index) => ({
                    id: index,
                    label: item.name,
                    value: item,
                }))}
                defaultLabel={'Выберите тип товара'}
                isStartItemDisabled={true}
            />
            <LabeledFloatField
                id={'goodField04'}
                label={'Цена'}
                name={'price'}
                pattern={'^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'}
                value={values['price'] || ''}
                onChange={handleChange}
            />
            <LabeledFloatField
                id={'goodField05'}
                label={'Цена распродажи'}
                name={'salePrice'}
                pattern={'^(|0|0[.]|0[.][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.][0-9]{0,2})$'}
                value={values['salePrice'] || ''}
                onChange={handleChange}
            />
        </PaddingTemplate>
    )
}

export default AddGoodCommonTab
