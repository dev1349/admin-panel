import React from 'react'
import Loader from '../loader/Loader'
import Modal from './Modal'

const Modals = ({
    fetchStatus,
    addedAttributeGroup,
    errorInGroupOperation,
    savedEditedAttributeGroup,
    deletedAttributeGroup,
}) => {
    return (
        <>
            {fetchStatus === 'pending' && <Loader />}
            {fetchStatus === 'errorGetAllGroup' && (
                <Modal
                    message={
                        'Ошибка! Невозможно получить список групп атрибутов('
                    }
                    error
                    action={errorInGroupOperation}
                />
            )}
            {fetchStatus === 'successAddGroup' && (
                <Modal
                    message={'Вы добавили новую группу!'}
                    success
                    action={addedAttributeGroup}
                />
            )}
            {fetchStatus === 'errorAddGroup' && (
                <Modal
                    message={'Ошибка! Группа не добавлена!'}
                    error
                    action={errorInGroupOperation}
                />
            )}
            {fetchStatus === 'successEditGroup' && (
                <Modal
                    message={'Вы отредактировали группу!'}
                    success
                    action={savedEditedAttributeGroup}
                />
            )}
            {fetchStatus === 'errorEditGroup' && (
                <Modal
                    message={'Ошибка! Группа не отредактированна!'}
                    error
                    action={errorInGroupOperation}
                />
            )}
            {fetchStatus === 'successDeleteGroup' && (
                <Modal
                    message={'Выделенная(ые) руппа(ы) удалена(ы)!'}
                    success
                    action={deletedAttributeGroup}
                />
            )}
            {fetchStatus === 'errorDeleteGroup' && (
                <Modal
                    message={'Ошибка! Группа(ы) не удалена(ы)!'}
                    error
                    action={errorInGroupOperation}
                />
            )}
            {fetchStatus === 'emptyName' && (
                <Modal
                    message={'Обязательное(ые) поле(я) пустое(ы)!'}
                    error
                    action={errorInGroupOperation}
                />
            )}
        </>
    )
}

export default Modals
