import React from 'react'
import LabeledPhoneField from '../inputs/labeledPhoneField/LabeledPhoneField'
import IconButton from '../buttons/iconButton/IconButton'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import FlexFirstGrowTemplate from '../../templates/flexFirstGrowTemplate/FlexFirstGrowTemplate'

const ContactPhone = ({
    phone,
    index,
    phones,
    onChange,
    setValidationResult,
    clearTouch,
    isPhoneDeleteButton,
    deletePhone,
}) => {
    return (
        <FlexFirstGrowTemplate noPadding alignItemsCenter noMargin>
            <LabeledPhoneField
                id={phone}
                label={`Контактный телефон ${index + 1}: `}
                name={phone}
                value={phones[phone]}
                onChange={onChange}
                shouldValidate={true}
                required={true}
                validationRules={
                    'в формате "0XX XXX XX XX" или "+38 0XX XXX XX XX"'
                }
                haveHelperText={true}
                setValidationResult={setValidationResult}
                clearTouch={clearTouch}
            />
            {isPhoneDeleteButton && (
                <IconButton onClick={deletePhone(phone)}>
                    <DeleteIcon />
                </IconButton>
            )}
        </FlexFirstGrowTemplate>
    )
}

export default ContactPhone
