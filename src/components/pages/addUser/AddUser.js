import React from 'react'
import H1 from '../../atoms/textElements/headers/H1/H1'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import { useSelector, useDispatch } from 'react-redux'
import {
    getUserFields,
    setAttributes,
    postUser,
    resetAttributes,
} from '../../../reducers/usersSlice'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
    let userFields = useSelector(getUserFields)
    const dispatch = useDispatch()
    let history = useHistory()

    const createNewUser = () => {
        if (
            userFields.name &&
            userFields.surname &&
            userFields.email &&
            userFields.phone
        ) {
            dispatch(postUser())
            dispatch(resetAttributes())
            history.push(`/users`)
        }
    }
    const setUserAttributes = attribute => {
        dispatch(setAttributes(attribute))
    }
    return (
        <PaddingTemplate>
            <H1>Добавить пользователя</H1>
            <LabeledTextField
                id={'name'}
                label={'Имя'}
                name={'name'}
                value={userFields.name}
                onChange={setUserAttributes}
                alignLeftFixedWidth={true}
            />
            <LabeledTextField
                id={'surname'}
                label={'Фамилия'}
                name={'surname'}
                value={userFields.surname}
                onChange={setUserAttributes}
                alignLeftFixedWidth={true}
            />
            <LabeledTextField
                id={'email'}
                label={'Email'}
                name={'email'}
                value={userFields.email}
                onChange={setUserAttributes}
                alignLeftFixedWidth={true}
                helperText={
                    'Пароль будет сгенерирован и выслан пользователю на указанный адрес электронной почты'
                }
            />
            <LabeledTextField
                id={'phone'}
                label={'Телефон'}
                name={'phone'}
                value={userFields.phone}
                onChange={setUserAttributes}
                pattern={'^[0-9]*$'}
                alignLeftFixedWidth={true}
            />
            <SimpleButton onClick={createNewUser}>Добавить</SimpleButton>
        </PaddingTemplate>
    )
}

export default AddUser
