import React from 'react'
import './GoodsFilter.sass'
import FilterInput from './FilterInput'

const GoodsFilter = ({
    goodStatus,
    goodImageStatus,
    goodTypes,
    filter,
    setGoodsFilterHandler,
    filteringGoodsHandler,
}) => {
    const submitHandler = evt => {
        evt.preventDefault()
        filteringGoodsHandler()
    }

    return (
        <div className={'filter--wrappers'}>
            <form onSubmit={submitHandler}>
                <div className={'filter--items'}>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'input'}
                            typeOfInput={'text'}
                            name={'name'}
                            title={'Наименование:'}
                            placeholder={'Наименование'}
                            value={filter.name}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'input'}
                            typeOfInput={'number'}
                            name={'price'}
                            title={'Цена:'}
                            placeholder={'Цена'}
                            value={filter.price}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'select'}
                            name={'status'}
                            title={'Статус:'}
                            placeholder={'Статус'}
                            value={filter.status}
                            items={goodStatus}
                            translateBoolean={['Есть', 'Нет']}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'input'}
                            typeOfInput={'text'}
                            name={'model'}
                            title={'Модель:'}
                            placeholder={'Модель'}
                            value={filter.model}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'input'}
                            typeOfInput={'number'}
                            name={'count'}
                            title={'Количество:'}
                            placeholder={'Количество'}
                            value={filter.count}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'select'}
                            name={'imageStatus'}
                            title={'Изображение товара:'}
                            placeholder={'Изображение товара'}
                            value={filter.imageStatus}
                            items={goodImageStatus}
                            translateBoolean={['Есть', 'Нет']}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={'select'}
                            name={'goodType.name'}
                            title={'Категория:'}
                            placeholder={'Категория'}
                            value={filter['goodType.name']}
                            items={goodTypes}
                            setGoodsFilterHandler={setGoodsFilterHandler}
                        />
                    </div>
                </div>
                <FilterInput typeOfField={'button'} typeOfButton={'submit'} />
            </form>
        </div>
    )
}

export default GoodsFilter
