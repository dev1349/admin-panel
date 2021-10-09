import React from 'react'
import ContainerWithHead from './ContainerWithHead'
import styled from 'styled-components'
import TableListContainer from './tableList/TableListContainer'
import EditCouponContainer from './editCoupon/EditCouponContainer'
import ComponentHeader from './componentHeader/ComponentHeader'
import Modal from './modal/Modal'


const ComponentContainer = styled.div`
  max-width: 1024px;
  margin: 15px auto 0 auto;
  padding: 10px;
`


const CouponsList = ({viewMode, error, closeErrorWindow}) => {
    return (
        <ComponentContainer>
            <ComponentHeader
                title={'Купоны'}
            />

            {error && <Modal
                message={'Поля "Название" и "Код" ОБЯЗАТЕЛЬНЫЕ!!!'}
                error
                action={closeErrorWindow}
            />}

            {viewMode === 'add' && <ContainerWithHead
                icon={'#plus'}
                size={12}
                title={'Добавление купона'}
            >
                <EditCouponContainer/>
            </ContainerWithHead>}

            {viewMode === 'edit' && <ContainerWithHead
                icon={'#edit'}
                size={12}
                title={'Редактирование купона'}
            >
                <EditCouponContainer/>
            </ContainerWithHead>}

            {viewMode === 'list' && <ContainerWithHead
                icon={'#list'}
                size={12}
                title={'Список купонов'}
            >
                <TableListContainer/>
            </ContainerWithHead>}
        </ComponentContainer>

    )
}


export default CouponsList