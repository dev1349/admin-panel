import React from 'react'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledFloatField from '../../molecules/inputs/labeledFloatField/LabeledFloatField'
import LabeledNumberField from '../../molecules/inputs/labeledNumberField/LabeledNumberField'
import LabeledSelectField from '../../molecules/inputs/labeledSelectField/LabeledSelectField'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import RedStar from '../../atoms/textElements/redStar/RedStar'
import HelpIcon from '../../atoms/icons/helpIcon/HelpIcon'

const AddGoodDataTab = ({ values, handleChange }) => {
    return (
        <PaddingTemplate>
            <LabeledTextField
                id={'goodField11'}
                label={
                    <>
                        <RedStar>*</RedStar>
                        &nbsp; Модель
                    </>
                }
                name={'model'}
                value={values['model'] || ''}
                onChange={handleChange}
                autoFocus={true}
            />
            <LabeledTextField
                id={'goodField12'}
                label={'Артикул'}
                name={'article'}
                value={values['article'] || ''}
                onChange={handleChange}
            />
            <LabeledFloatField
                id={'goodField13'}
                label={'Цена'}
                name={'price'}
                pattern={
                    '^(|0|0[.,]|0[.,][0-9]{0,2}|[1-9][0-9]*|[1-9][0-9]*[.,][0-9]{0,2})$'
                }
                value={values['price'] || ''}
                onChange={handleChange}
            />
            <LabeledNumberField
                id={'goodField14'}
                label={'Количество'}
                name={'quantity'}
                value={values['quantity'] !== null ? values['quantity'] : ''}
                onChange={handleChange}
            />
            <LabeledNumberField
                id={'goodField14'}
                label={'Минимальное количество'}
                name={'minQuantity'}
                pattern={'^(|[0-9]*)$'}
                value={
                    values['minQuantity'] !== null ? values['minQuantity'] : ''
                }
                onChange={handleChange}
                isHelp={true}
                helpText={'Минимальное количество для заказа этого товара'}
                helpIcon={<HelpIcon color={'action'} canHover />}
            />
            <LabeledSelectField
                id={'goodField15'}
                label={'Отсутствие на складе'}
                name={'isInStock'}
                value={values['isInStock'] || ''}
                onChange={handleChange}
                items={[
                    {
                        id: 0,
                        label: 'В наличии',
                        value: 'inStock',
                    },
                    {
                        id: 1,
                        label: 'Нет в наличии',
                        value: 'notInStock',
                    },
                    {
                        id: 2,
                        label: 'Ожидание 2-3 дня',
                        value: 'waiting_2-3_days',
                    },
                    {
                        id: 3,
                        label: 'Предзаказ',
                        value: 'pre-order',
                    },
                ]}
            />
            <LabeledFloatField
                id={'goodField16'}
                label={'Размеры (длинна)'}
                name={'length'}
                pattern={'^(|0|0[.,]|0[.,][0-9]*|[1-9][0-9]*[,.]?[0-9]*)$'}
                value={values['length'] || ''}
                onChange={handleChange}
            />
            <LabeledFloatField
                id={'goodField17'}
                label={'Размеры (ширина)'}
                name={'width'}
                pattern={'^(|0|0[.,]|0[.,][0-9]*|[1-9][0-9]*[,.]?[0-9]*)$'}
                value={values['width'] || ''}
                onChange={handleChange}
            />
            <LabeledFloatField
                id={'goodField18'}
                label={'Размеры (высота)'}
                name={'height'}
                pattern={'^(|0|0[.,]|0[.,][0-9]*|[1-9][0-9]*[,.]?[0-9]*)$'}
                value={values['height'] || ''}
                onChange={handleChange}
            />
            <LabeledSelectField
                id={'goodField19'}
                label={'Единица длинны'}
                name={'unitLength'}
                value={values['unitLength'] || ''}
                onChange={handleChange}
                items={[
                    {
                        id: 0,
                        label: 'Сантиметр',
                        value: 'centimeter',
                    },
                    {
                        id: 1,
                        label: 'Миллиметр',
                        value: 'millimeter',
                    },
                    {
                        id: 2,
                        label: 'Метр',
                        value: 'meter',
                    },
                ]}
            />
            <LabeledFloatField
                id={'goodField19'}
                label={'Вес'}
                name={'weight'}
                pattern={'^(|[1-9][0-9]*[.]?[0-9]*)$'}
                value={values['weight'] || ''}
                onChange={handleChange}
            />
            <LabeledSelectField
                id={'goodField20'}
                label={'Единица веса'}
                name={'unitWeight'}
                value={values['unitWeight'] || ''}
                onChange={handleChange}
                items={[
                    {
                        id: 0,
                        label: 'Килограммы',
                        value: 'kilograms',
                    },
                    {
                        id: 1,
                        label: 'Граммы',
                        value: 'grams',
                    },
                ]}
            />
            <LabeledSelectField
                id={'goodField21'}
                label={'Статус'}
                name={'status'}
                value={values['status'] || ''}
                onChange={handleChange}
                items={[
                    {
                        id: 0,
                        label: 'Включено',
                        value: 'turnOn',
                    },
                    {
                        id: 1,
                        label: 'Отключено',
                        value: 'turnOff',
                    },
                ]}
            />
        </PaddingTemplate>
    )
}

export default AddGoodDataTab
