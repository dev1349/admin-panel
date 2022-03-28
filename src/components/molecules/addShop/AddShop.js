import React from 'react'
import GreyBorderedWrapper from '../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import LabeledTextField from '../inputs/labeledTextField/LabeledTextField'
import LabeledTextFieldMultiline from '../inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import IconButton from '../buttons/iconButton/IconButton'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import FlexFirstGrowTemplate from '../../templates/flexFirstGrowTemplate/FlexFirstGrowTemplate'

const AddShop = ({
    index,
    city,
    cities,
    onChange,
    isCityDeleteButton,
    deleteCity,
}) => {
    return (
        <FlexFirstGrowTemplate noPadding alignItemsCenter noMargin>
            <GreyBorderedWrapper topBottomMargin withPadding>
                <LabeledTextFieldMultiline
                    id={`${city}_address`}
                    label={`Адрес магазина ${index}:`}
                    name={'address'}
                    value={cities[city]['address']}
                    onChange={onChange(city)}
                />
                <LabeledTextField
                    id={`${city}_cityName`}
                    label={`Название города:`}
                    name={'cityName'}
                    value={cities[city]['cityName']}
                    onChange={onChange(city)}
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
