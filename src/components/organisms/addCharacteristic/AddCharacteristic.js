import React from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/AdminPageBorder/AdminPageBorder'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledNumberField from '../../molecules/inputs/labeledNumberField/LabeledNumberField'
import LabeledSelectField from '../../molecules/inputs/labeledSelectField/LabeledSelectField'
import LabeledSwitch from '../../molecules/inputs/labeledSwitch/LabeledSwitch'
import LabeledTextFields from '../../molecules/inputs/labeledTextFields/LabeledTextFields'

const AddCharacteristic = ({
    icon,
    title,
    buttons,
    characteristicField,
    changeCharacteristicFields,
    changeCharacteristicGroup,
    characteristicGroups,
    characteristicValues,
    changeCharacteristicValue,
    deleteCharacteristicValue,
    addCharacteristicValue,
    isDisableGroupSelect,
}) => {
    const characteristicGroupItems = characteristicGroups.map(
        characteristicGroup => ({
            id: characteristicGroup.id,
            label: characteristicGroup.name,
            value: characteristicGroup.id,
        })
    )

    return (
        <MaxWidthTemplate>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <LabeledTextField
                    id={'name'}
                    label={'Название характеристики *'}
                    placeholder={'Введите название характеристики товара'}
                    name={'name'}
                    value={characteristicField['name']}
                    onChange={changeCharacteristicFields}
                    autoFocus
                    inputProps={{ 'aria-label': 'name of characteristic' }}
                />
                <LabeledNumberField
                    id={'orderNumber'}
                    label={'Порядковый номер *'}
                    placeholder={
                        'Введите порядковый номер отображения характеристики товара'
                    }
                    name={'orderNumber'}
                    value={characteristicField['orderNumber']}
                    onChange={changeCharacteristicFields}
                    inputProps={{ 'aria-label': 'sort order' }}
                    helperText={'Значение от 0 до 999'}
                />
                <LabeledSelectField
                    id={'characteristicGroup'}
                    label={'Группа характеристик'}
                    name={'characteristicGroup'}
                    value={
                        characteristicField['characteristicGroup']
                            ? characteristicField['characteristicGroup'].id
                            : null
                    }
                    onChange={changeCharacteristicGroup}
                    items={characteristicGroupItems}
                    defaultLabel={'Выберите группу характеристик'}
                    isStartItemDisabled={false}
                    inputProps={{
                        'aria-label': 'select characteristics group',
                    }}
                    disabled={isDisableGroupSelect}
                />
                <LabeledSwitch
                    id={'isAdminOnly'}
                    label={'Только для администратора'}
                    name={'isAdminOnly'}
                    checked={characteristicField['isAdminOnly']}
                    onChange={changeCharacteristicFields}
                    inputProps={{ 'aria-label': 'only for administrator' }}
                />
                <LabeledSwitch
                    id={'isAvailableInFilter'}
                    label={'Для фильтрации'}
                    name={'isAvailableInFilter'}
                    checked={characteristicField['isAvailableInFilter']}
                    onChange={changeCharacteristicFields}
                    inputProps={{ 'aria-label': 'is available in filter' }}
                />
                <LabeledTextFields
                    id={'characteristicValues'}
                    label={'Значения характеристики'}
                    characteristicValues={characteristicValues}
                    changeCharacteristicValue={changeCharacteristicValue}
                    deleteCharacteristicValue={deleteCharacteristicValue}
                    addCharacteristicValue={addCharacteristicValue}
                />
            </AdminPageBorder>
        </MaxWidthTemplate>
    )
}

export default AddCharacteristic
