import React from 'react'
import styled from 'styled-components'
import Button from '../common/button/Button'
import TableList from '../common/tableList/TableList'
import ContainerWithHead from '../common/containerWithHead/ContainerWithHead'
import Field from '../common/field/Field'
import Loader from '../common/loader/Loader'
import Modal from '../common/modal/Modal'


const ComponentContainer = styled.div`
  max-width: 1024px;
  margin: 15px auto 0 auto;
  padding: 10px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 24px;
`

const ButtonGroup = styled.div`
  display: flex;
`


const AttributeGroup = ({
                            attributeGroupItems,
                            addAttributeGroupFields,
                            changeAddAttributesGroupFields,
                            attributeGroupMode,
                            changeAttributeGroupMode,
                            fetchStatus,
                            saveCategory,
                            addedAttributeGroup,
                            editAttributeGroup,
                            savedEditedAttributeGroup,
                            addRemoveIdGroupForDeleting,
                            idGroupArrayForDeleting,
                            removeSelectedAttributesGroup,
                            errorInGroupOperation,
                            sortAttributeGroup,
                            sortOrderGroupName,
                            isAllGroupChecked,
                            checkedAllGroup,
                            isButtonDisabled
                        }) => {

    const {name, uaName, sortOrder} = addAttributeGroupFields

    const resetToListModeHandler = () => {
        changeAttributeGroupMode('list')
    }

    const resetToAddModeHandler = () => {
        changeAttributeGroupMode('add')
    }


    return (

        <ComponentContainer>

            {fetchStatus === 'pending' && <Loader/>}
            {fetchStatus === 'successAddGroup' && <Modal
                message={'Вы добавили новую группу!'}
                success
                action={addedAttributeGroup}
            />}
            {fetchStatus === 'errorAddGroup' && <Modal
                message={'Ошибка! Группа не добавлена!'}
                error
                action={errorInGroupOperation}
            />}
            {fetchStatus === 'successEditGroup' && <Modal
                message={'Вы отредактировали группу!'}
                success
                action={savedEditedAttributeGroup}
            />}
            {fetchStatus === 'errorEditGroup' && <Modal
                message={'Ошибка! Группа не отредактированна!'}
                error
                action={errorInGroupOperation}
            />}
            {fetchStatus === 'errorDeleteGroup' && <Modal
                message={'Ошибка! Группа(ы) не удалена(ы)!'}
                error
                action={errorInGroupOperation}
            />}
            {fetchStatus === 'emptyName' && <Modal
                message={'Обязательное(ые) поле(я) пустое(ы)!'}
                error
                action={errorInGroupOperation}
            />}

            <Header>
                <Title>Группы атрибутов</Title>
                <ButtonGroup>

                    {attributeGroupMode === 'list' && <Button
                        icon={'#plus'}
                        onClick={resetToAddModeHandler}
                        disabled={isButtonDisabled}
                    />}
                    {attributeGroupMode === 'list' && <Button
                        icon={'#delete'}
                        onClick={removeSelectedAttributesGroup}
                        disabled={isButtonDisabled}
                    />}
                    {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <Button
                        icon={'#save'}
                        onClick={saveCategory}
                        disabled={isButtonDisabled}
                    />}
                    {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <Button
                        icon={'#reply'}
                        onClick={resetToListModeHandler}
                        disabled={isButtonDisabled}
                    />}

                </ButtonGroup>
            </Header>

            {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <ContainerWithHead
                icon={'#edit'}
                size={12}
                title={'Добавление группы'}
            >
                <Field
                    type={'input'}
                    typeOfInput={'text'}
                    name={'name'}
                    label={'* Название (rus)'}
                    id={'name'}
                    value={name}
                    onChange={changeAddAttributesGroupFields}
                    autofocus
                />
                <Field
                    type={'input'}
                    typeOfInput={'text'}
                    name={'uaName'}
                    label={'* Название (ua)'}
                    id={'uaName'}
                    value={uaName}
                    onChange={changeAddAttributesGroupFields}
                />
                <Field
                    type={'input'}
                    typeOfInput={'number'}
                    name={'sortOrder'}
                    label={'Порядок сортировки'}
                    id={'sortOrder'}
                    value={sortOrder}
                    onChange={changeAddAttributesGroupFields}
                />
            </ContainerWithHead>}


            {attributeGroupMode === 'list' && <ContainerWithHead
                icon={'#list'}
                size={12}
                title={'Список групп атрибутов'}
            >
                <TableList
                    firstCheckboxColumn={true}
                    columnTitle={[
                        {
                            id: 0,
                            name: 'Название группы',
                            sort: true,
                        },
                        {
                            id: 1,
                            name: 'Порядок сортировки',
                            sort: false,
                        },
                        {
                            id: 2,
                            name: 'Действие',
                            sort: false,
                        },
                    ]}
                    attributeGroupItems={attributeGroupItems}
                    editAttributeGroup={editAttributeGroup}
                    addRemoveIdGroupForDeleting={addRemoveIdGroupForDeleting}
                    idGroupArrayForDeleting={idGroupArrayForDeleting}
                    sortAttributeGroup={sortAttributeGroup}
                    sortOrder={sortOrderGroupName}
                    isAllGroupChecked={isAllGroupChecked}
                    checkedAllGroup={checkedAllGroup}
                />
            </ContainerWithHead>}

        </ComponentContainer>
    )
}


export default AttributeGroup