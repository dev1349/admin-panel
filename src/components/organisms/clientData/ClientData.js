import React from 'react'
import GreyBorderedWrapper from '../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import FlexSpaceBetweenTemplate from '../../templates/flexSpaceBetweenTemplate/FlexSpaceBetweenTemplate'
import H2 from '../../atoms/textElements/headers/H2/H2'
import ButtonWithIconAndLabel from '../../molecules/buttons/buttonWithIconAndLabel/ButtonWithIconAndLabel'
import SearchIcon from '../../atoms/icons/searchIcon/SearchIcon'
import H3 from '../../atoms/textElements/headers/H3/H3'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledDropDownTextFieldWithValidation from '../../molecules/inputs/labeledDropDownTextFieldWithValidation/LabeledDropDownTextFieldWithValidation'
import LabeledCheckbox from '../../atoms/inputs/labeledCheckbox/LabeledCheckbox'
import LabeledTextFieldMultiline from '../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import LabeledAutocomplete from '../../molecules/inputs/labeledAutocomplete/LabeledAutocomplete'
import LabeledDateTimeFromToField from '../../molecules/inputs/labeledDateTimeFromToField/LabeledDateTimeFromToField'

const ClientData = ({
    searchClients,
    changeFieldsValue,
    clientFieldsValues,
    fields,
}) => {
    return (
        <>
            <GreyBorderedWrapper>
                <FlexSpaceBetweenTemplate>
                    <H2>Клиент</H2>
                    <ButtonWithIconAndLabel
                        icon={<SearchIcon />}
                        label={'Найти'}
                        onClick={searchClients}
                    />
                </FlexSpaceBetweenTemplate>
                <PaddingTemplate>
                    <H3>Новый клиент</H3>
                    <LabeledTextField
                        id={fields.clientName.name}
                        label={fields.clientName.label}
                        name={fields.clientName.name}
                        value={clientFieldsValues[fields.clientName.name]}
                        onChange={changeFieldsValue}
                        placeholder={fields.clientName.placeholder}
                    />
                    <LabeledDropDownTextFieldWithValidation
                        id={fields.clientPhone.name}
                        label={fields.clientPhone.label}
                        name={fields.clientPhone.name}
                        value={clientFieldsValues[fields.clientPhone.name]}
                        onChange={changeFieldsValue}
                        placeholder={fields.clientPhone.placeholder}
                        pattern={fields.clientPhone.pattern}
                        helperText={fields.clientPhone.helperText}
                        check={fields.clientPhone.check}
                    />
                    <LabeledTextField
                        id={fields.clientEmail.name}
                        label={fields.clientEmail.label}
                        name={fields.clientEmail.name}
                        value={clientFieldsValues[fields.clientEmail.name]}
                        onChange={changeFieldsValue}
                        pattern={fields.clientEmail.pattern}
                    />
                    <H3>Адрес</H3>
                    <LabeledCheckbox
                        name={fields.hasDelivery.name}
                        label={fields.hasDelivery.label}
                        checked={clientFieldsValues[fields.hasDelivery.name]}
                        onChange={changeFieldsValue}
                    />
                    <LabeledTextFieldMultiline
                        id={fields.clientAddress.name}
                        name={fields.clientAddress.name}
                        label={fields.clientAddress.label}
                        placeholder={fields.clientAddress.placeholder}
                        value={clientFieldsValues[fields.clientAddress.name]}
                        onChange={changeFieldsValue}
                    />
                    <LabeledAutocomplete
                        id={fields.clientCity.name}
                        label={fields.clientCity.label}
                        name={fields.clientCity.name}
                        value={clientFieldsValues[fields.clientCity.name]}
                        changeValue={changeFieldsValue}
                        options={fields.clientCity.options}
                    />
                    <LabeledDateTimeFromToField
                        id={fields.clientDeliveryDateTime.name}
                        label={fields.clientDeliveryDateTime.label}
                        date={fields.clientDeliveryDateTime.date}
                        timeFrom={fields.clientDeliveryDateTime.timeFrom}
                        timeTo={fields.clientDeliveryDateTime.timeTo}
                    />
                    <LabeledTextFieldMultiline
                        id={fields.clientComment.name}
                        label={fields.clientComment.label}
                        name={fields.clientComment.name}
                        value={clientFieldsValues[fields.clientComment.name]}
                        onChange={changeFieldsValue}
                    />
                </PaddingTemplate>
            </GreyBorderedWrapper>
        </>
    )
}

export default ClientData
