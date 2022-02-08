import React, { useCallback, useState } from 'react'
import H1 from '../../atoms/textElements/headers/H1/H1'
import Header2 from '../../molecules/headers/header2/Header2'
import GreyBorderedWrapper from '../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import Form from '../../atoms/form/Form'
import LabeledPhoneField from '../../molecules/inputs/labeledPhoneField/LabeledPhoneField'
import { useHistory } from 'react-router-dom'
import PaddingBetweenButtonsTemplate from '../../templates/paddingBetweenButtonsTemplate/PaddingBetweenButtonsTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledEmailField from '../../molecules/inputs/labeledEmailField/LabeledEmailField'
import LabeledAutocomplete from '../../molecules/inputs/labeledAutocomplete/LabeledAutocomplete'
import LabeledTextFieldMultiline from '../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import { createFilterOptions } from '@mui/material'

const filter = createFilterOptions()

const AddClient = ({ cities }) => {
    const [fieldsValues, setFieldsValues] = useState({
        name: null,
        phone: null,
        email: null,
        city: null,
        address: null,
    })
    const [validationFieldsInfo, setValidationFieldsInfo] = useState(null)

    const handleSetFieldsInfo = useCallback(
        payload => setValidationFieldsInfo(prev => ({ ...prev, ...payload })),
        [setValidationFieldsInfo]
    )

    const [validatingNow, setValidatingNow] = useState(false)

    const handleChangeFieldValue = payload => {
        setFieldsValues(prevState => ({ ...prevState, ...payload }))
    }

    const canAddNewClient = () => {
        if (!validationFieldsInfo) return
        const fields = Object.keys(validationFieldsInfo)
        return fields.reduce((acc, current) => {
            const subFields = Object.keys(validationFieldsInfo[current])
            return (
                acc &&
                subFields.reduce((subAcc, subCurrent) => {
                    return subAcc && validationFieldsInfo[current][subCurrent]
                }, true)
            )
        }, true)
    }

    const handleAddClient = () => {
        if (!canAddNewClient()) {
            setValidatingNow(true)
            return
        }

        console.log('create new client')
    }

    const history = useHistory()

    const handleCancel = () => {
        history.goBack()
    }

    const createFullCityName = option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    }

    return (
        <>
            <H1>Новый клиент</H1>
            <Header2>Карточка клиента</Header2>
            <GreyBorderedWrapper>
                <PaddingTemplate>
                    <Form>
                        <LabeledTextField
                            id={'clientName'}
                            label={'Имя*'}
                            name={'name'}
                            value={fieldsValues['name']}
                            onChange={handleChangeFieldValue}
                            shouldValidate={true}
                            required={true}
                            validationRules={[
                                {
                                    checking: value => value.length < 2,
                                    errorMessage: 'Введите минимум 2 символа',
                                },
                            ]}
                            validatingNow={validatingNow}
                            setValidationResult={handleSetFieldsInfo}
                            haveHelperText={true}
                            pattern={/^[a-zа-яёєії]*$/iu}
                        />
                        <LabeledPhoneField
                            id={'phone'}
                            label={'Телефон*'}
                            name={'phone'}
                            value={fieldsValues['phone']}
                            onChange={handleChangeFieldValue}
                            shouldValidate={true}
                            required={true}
                            validationRules={
                                'Укажите телефон в формате "0XX XXX XX XX"'
                            }
                            validatingNow={validatingNow}
                            setValidationResult={handleSetFieldsInfo}
                            haveHelperText={true}
                            pattern={/^\+?[0-9]*$/}
                        />
                        <LabeledEmailField
                            id={'email'}
                            label={'E-mail*'}
                            name={'email'}
                            value={fieldsValues['email']}
                            onChange={handleChangeFieldValue}
                            shouldValidate={true}
                            required={true}
                            validationRules={
                                'Адрес электронной почты указан неверно'
                            }
                            validatingNow={validatingNow}
                            setValidationResult={handleSetFieldsInfo}
                            haveHelperText={true}
                            pattern={/^[\w-.@]*$/}
                        />
                        <LabeledAutocomplete
                            textFieldId={'city'}
                            name={'city'}
                            label={'Населенный пункт*'}
                            value={fieldsValues['city']}
                            changeValue={handleChangeFieldValue}
                            options={cities}
                            getOptionLabel={createFullCityName}
                            canAddValue={true}
                            shouldValidate={true}
                            required={true}
                            validationRules={[
                                {
                                    checking: value => value === '',
                                    errorMessage: 'Укажите населенный пункт',
                                },
                            ]}
                            validatingNow={validatingNow}
                            setValidationResult={handleSetFieldsInfo}
                            haveHelperText={true}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params)

                                const { inputValue } = params
                                const inputValueArray = inputValue.split(', ')
                                const optionKeys = Object.keys(options[0])
                                const newValue = {}
                                optionKeys.forEach(
                                    (key, index) =>
                                        (newValue[key] = inputValueArray[index])
                                )

                                const isExisting = options.some(
                                    option =>
                                        inputValue ===
                                        createFullCityName(option)
                                )

                                if (inputValue !== '' && !isExisting) {
                                    filtered.push({
                                        inputValue: newValue,
                                        title: `Add "${inputValue}"`,
                                    })
                                }

                                return filtered
                            }}
                            selectOnFocus={true}
                            clearOnBlur={true}
                            handleHomeEndKeys={true}
                        />
                        <LabeledTextFieldMultiline
                            id={'address'}
                            label={'Адрес'}
                            name={'address'}
                            value={fieldsValues['address']}
                            onChange={handleChangeFieldValue}
                        />
                        <PaddingBetweenButtonsTemplate>
                            <SimpleButton
                                type={'submit'}
                                onClick={handleAddClient}
                            >
                                Создать
                            </SimpleButton>
                            <SimpleButton
                                variant={'outlined'}
                                onClick={handleCancel}
                            >
                                Отменить
                            </SimpleButton>
                        </PaddingBetweenButtonsTemplate>
                    </Form>
                </PaddingTemplate>
            </GreyBorderedWrapper>
        </>
    )
}

export default AddClient
