import React from 'react'
import Form from '../../../atoms/form/Form'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledFloatField from '../../../molecules/inputs/labeledFloatField/LabeledFloatField'
import LabeledSelectField from '../../../molecules/inputs/labeledSelectField/LabeledSelectField'
import LabeledNumberField from '../../../molecules/inputs/labeledNumberField/LabeledNumberField'
import TextAlignRightTemplate from '../../../templates/textAlignRightTemplate/TextAlignRightTemplate'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import FilterIcon from '../../../atoms/icons/filterIcon/FilterIcon'

const WSGoodsFilter = ({
    filter,
    goodStatus,
    goodTypes,
    setGoodsFilterHandler,
    filteringGoodsHandler,
}) => {
    const handlePaste = event => {
        event.preventDefault()
    }

    return (
        <Form>
            <LabeledTextField
                id={'nameFilterField'}
                label={'Наименование'}
                name={'name'}
                value={filter.name}
                onChange={setGoodsFilterHandler}
                autoFocus
            />
            <LabeledFloatField
                id={'priceFilterField'}
                label={'Цена'}
                name={'salePrice'}
                pattern={
                    '^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$'
                }
                value={filter.salePrice}
                onChange={setGoodsFilterHandler}
            />
            <LabeledSelectField
                id={'statusFilterField'}
                label={'Статус'}
                name={'status'}
                value={filter.status}
                onChange={setGoodsFilterHandler}
                items={goodStatus.map((item, index) => ({
                    id: index,
                    label: item ? 'Есть' : 'Нет',
                    value: item,
                }))}
                defaultLabel={'Выберите статус товара'}
                isStartItemDisabled={false}
            />
            <LabeledTextField
                id={'modelFilterField'}
                label={'Модель'}
                name={'model'}
                value={filter.model}
                onChange={setGoodsFilterHandler}
            />
            <LabeledNumberField
                id={'CountFilterField'}
                label={'Количество'}
                name={'count'}
                pattern={'^(|0|[0-9]+)$'}
                value={filter.count}
                onChange={setGoodsFilterHandler}
                onPaste={handlePaste}
            />
            <LabeledSelectField
                id={'imageStatusFilterField'}
                label={'Изображение товара'}
                name={'imageStatus'}
                value={filter.imageStatus}
                onChange={setGoodsFilterHandler}
                items={goodStatus.map((item, index) => ({
                    id: index,
                    label: item ? 'Есть' : 'Нет',
                    value: item,
                }))}
                defaultLabel={'Выберите статус изображения товара'}
                isStartItemDisabled={false}
            />
            <LabeledSelectField
                id={'imageStatusFilterField'}
                label={'Категория'}
                name={'goodType.name'}
                value={filter['goodType.name']}
                onChange={setGoodsFilterHandler}
                items={goodTypes.map((item, index) => ({
                    id: index,
                    label: item,
                    value: item,
                }))}
                defaultLabel={'Выберите категорию'}
                isStartItemDisabled={false}
            />
            <TextAlignRightTemplate>
                <IconButton onClick={filteringGoodsHandler}>
                    <FilterIcon />
                </IconButton>
            </TextAlignRightTemplate>
        </Form>
    )
}

export default WSGoodsFilter
