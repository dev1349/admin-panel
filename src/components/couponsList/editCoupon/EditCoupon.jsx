import React from 'react'
import styled from 'styled-components'
import InputText from '../inputs/InputText'
import InputNumber from '../inputs/InputNumber'
import InputDate from '../inputs/InputDate'
import InputSelect from '../inputs/InputSelect'
import InputRadio from '../inputs/InputRadio'
import InputFloat from '../inputs/InputFloat'


const RadioFieldGroup = styled.div`
  padding: 5px 0;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`

const RadioFieldGroupLabel = styled.div`

  @media (min-width: 600px) {
    width: 25%;
    text-align: right;
  }
`

const RadioFieldSet = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (min-width: 600px) {
    margin-left: 10px;
    width: 75%;
  }
`

const EditCoupon = ({
                        currentCoupon,
                        changeCouponName,
                        changeCouponCode,
                        changeCouponDiscountType,
                        changeCouponDiscountValue,
                        changeCouponTotalSum,
                        changeCouponAuthUser,
                        changeCouponGood,
                        changeCouponGoodCategory,
                        changeCouponStartDate,
                        changeCouponEndDate,
                        changeCouponUseCount,
                        changeCouponUseOneClientCount,
                        changeCouponStatus
                    }) => {
    return (
        <form>
            <InputText
                placeholder={'Название купона'}
                name={'name'}
                label={'* Название купона'}
                id={'name'}
                value={currentCoupon.name}
                onChange={changeCouponName}
                autofocus
            />
            <InputText
                placeholder={'Код купона'}
                name={'code'}
                label={'* Код'}
                id={'code'}
                value={currentCoupon.code}
                onChange={changeCouponCode}
            />
            <InputSelect
                type={'select'}
                name={'discount.type'}
                label={'Тип скидки'}
                id={'discountType'}
                items={[
                    {
                        title: 'Проценты',
                        value: 'percent'
                    },
                    {
                        title: 'Фиксированная сума',
                        value: 'fixedSum'
                    },
                ]}
                value={currentCoupon.discount.type}
                onChange={changeCouponDiscountType}
            />
            <InputFloat
                placeholder={'Скидка'}
                name={'discount.value'}
                label={'Скидка'}
                id={'discountValue'}
                pattern={'^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$'}
                value={currentCoupon.discount.value}
                onChange={changeCouponDiscountValue}
                disabled={!currentCoupon.discount.type}
            />
            <InputFloat
                placeholder={'Итого'}
                name={'totalSum'}
                label={'Итого'}
                id={'total'}
                pattern={'^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$'}
                value={currentCoupon.totalSum}
                onChange={changeCouponTotalSum}
            />
            <RadioFieldGroup>
                <RadioFieldGroupLabel>
                    Авторизация пользователя
                </RadioFieldGroupLabel>
                <RadioFieldSet>
                    <InputRadio
                        inputType={'radio'}
                        name={'authUser'}
                        label={'Да'}
                        id={'authUserYes'}
                        value={true}
                        onChange={changeCouponAuthUser}
                        checked={currentCoupon.authUser}
                    />
                    <InputRadio
                        inputType={'radio'}
                        name={'authUser'}
                        label={'Нет'}
                        id={'authUserNo'}
                        value={false}
                        onChange={changeCouponAuthUser}
                        checked={!currentCoupon.authUser}
                    />
                </RadioFieldSet>
            </RadioFieldGroup>
            <InputSelect
                type={'select'}
                name={'good'}
                label={'Товары'}
                id={'good'}
                items={[
                    {
                        title: 'Процессоры',
                        value: 'cpu'
                    },
                    {
                        title: 'Видеокарты',
                        value: 'videoCard'
                    },
                    {
                        title: 'Твердотельные накопители',
                        value: 'ssd'
                    },
                ]}
                value={currentCoupon.good}
                onChange={changeCouponGood}
            />
            <InputSelect
                name={'goodCategory'}
                label={'Категория'}
                id={'goodCategory'}
                items={[
                    {
                        title: 'Компьютерные комплектующие',
                        value: 'pc'
                    },
                    {
                        title: 'Товары для дома',
                        value: 'home'
                    },
                    {
                        title: 'Автотовары',
                        value: 'auto'
                    },
                ]}
                value={currentCoupon.goodCategory}
                onChange={changeCouponGoodCategory}
            />
            <InputDate
                name={'startDate'}
                label={'Дата начала'}
                id={'startDate'}
                value={currentCoupon.startDate}
                onChange={changeCouponStartDate}
            />
            <InputDate
                name={'endDate'}
                label={'Дата окончания'}
                id={'endDate'}
                value={currentCoupon.endDate}
                onChange={changeCouponEndDate}
            />
            <InputNumber
                placeholder={'Количество применений'}
                name={'useCount'}
                label={'Количество применений купона'}
                id={'useCount'}
                value={currentCoupon.useCount}
                onChange={changeCouponUseCount}
            />
            <InputNumber
                placeholder={'Количество применений одним'}
                name={'useOneClientCount'}
                label={'Количество применений одним покупателем'}
                id={'useOneClientCount'}
                value={currentCoupon.useOneClientCount}
                onChange={changeCouponUseOneClientCount}
            />
            <InputSelect
                name={'status'}
                label={'Категория'}
                id={'status'}
                items={[
                    {
                        title: 'Включено',
                        value: true
                    },
                    {
                        title: 'Не включено',
                        value: false
                    },
                ]}
                value={currentCoupon.status}
                onChange={changeCouponStatus}
            />
        </form>

    )
}


export default EditCoupon