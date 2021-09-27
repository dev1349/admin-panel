import React from 'react'
import ContainerWithHead from '../ContainerWithHead'
import Field from '../field/Field'


const AddEditGroup = ({addAttributeGroupFields, attributeGroupMode, changeAddAttributesGroupFields}) => {
    const {name, uaName, sortOrder} = addAttributeGroupFields

    return (
        <ContainerWithHead
            icon={attributeGroupMode === 'edit' ? '#edit' : attributeGroupMode === 'add' ? '#plus' : null}
            size={12}
            title={attributeGroupMode === 'add' ? 'Добавление группы' : attributeGroupMode === 'edit' ? 'Редактирование группы' : null}
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
                label={'Название (ua)'}
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
        </ContainerWithHead>
    )
}


export default AddEditGroup