import React, { useCallback } from 'react'
import GreyBorderedWrapper from '../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import LabeledTextField from '../inputs/labeledTextField/LabeledTextField'
import IconButton from '../buttons/iconButton/IconButton'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import FlexFirstGrowTemplate from '../../templates/flexFirstGrowTemplate/FlexFirstGrowTemplate'
import LabeledPhoneField from '../inputs/labeledPhoneField/LabeledPhoneField'

const AddShop = ({ index, city, cities, onChange, isCityDeleteButton, deleteCity, setValidationResult, clearTouch }) => {
    const handleSetValidationResult = useCallback(payload => setValidationResult({ [`${city}_phone`]: payload.phone }), [])

    return (
        <FlexFirstGrowTemplate noPadding alignItemsCenter noMargin>
            <GreyBorderedWrapper topBottomMargin withPadding>
                <LabeledTextField
                    id={`${city}_address`}
                    label={`Адрес магазина ${index}:`}
                    name={'address'}
                    value={cities[city]['address']}
                    onChange={onChange(city)}
                />
                <LabeledTextField
                    id={`${city}_name`}
                    label={`Название :`}
                    name={'name'}
                    value={cities[city]['name']}
                    onChange={onChange(city)}
                />

                <LabeledPhoneField
                    id={`market_phone_${index}`}
                    label={`Телефон:`}
                    name={'phone'}
                    value={cities[city]['phone']}
                    onChange={onChange(city)}
                    shouldValidate={true}
                    required={true}
                    validationRules={'в формате "0XX XXX XX XX" или "+38 0XX XXX XX XX"'}
                    haveHelperText={true}
                    setValidationResult={handleSetValidationResult}
                    clearTouch={clearTouch}
                />

                <LabeledTextField
                    id={`${city}_mon_fri`}
                    label={`Пн-Пт (рабочие часы):`}
                    name={'mon_fri'}
                    value={cities[city]['mon_fri']}
                    onChange={onChange(city)}
                />
                <LabeledTextField
                    id={`${city}_sat`}
                    label={`Cб (рабочие часы):`}
                    name={'sat'}
                    value={cities[city]['sat']}
                    onChange={onChange(city)}
                />
                <LabeledTextField
                    id={`${city}_sun`}
                    label={`Вс (рабочие часы):`}
                    name={'sun'}
                    value={cities[city]['sun']}
                    onChange={onChange(city)}
                />
            </GreyBorderedWrapper>

            {isCityDeleteButton && (
                <IconButton onClick={deleteCity(city)}>
                    <DeleteIcon />
                </IconButton>
            )}
        </FlexFirstGrowTemplate>
    )
}

export default AddShop
