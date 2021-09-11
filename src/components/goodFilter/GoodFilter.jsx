import React from 'react'
import './GoodFilter.sass'
import FilterInput from './FilterInput'


const GoodFilter = ({goodStatus, goodImageStatus, goodTypes, filter, changeGoodFilter, filteringGood}) => {

    const submitHandler = (evt) => {
        evt.preventDefault()
        filteringGood()
    }

    return (
        <div className={"filter--container"}>
            <form onSubmit={submitHandler}>
                <div className={"filter--items"}>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"input"}
                            typeOfInput={"text"}
                            name={"name"}
                            title={"Наименование:"}
                            placeholder={"Наименование"}
                            value={filter.name}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"input"}
                            typeOfInput={"number"}
                            name={"price"}
                            title={"Цена:"}
                            placeholder={"Цена"}
                            value={filter.price}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"select"}
                            name={"status"}
                            title={"Статус:"}
                            placeholder={"Статус"}
                            value={filter.status}
                            items={goodStatus}
                            translateBoolean={['Есть', 'Нет']}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"input"}
                            typeOfInput={"text"}
                            name={"model"}
                            title={"Модель:"}
                            placeholder={"Модель"}
                            value={filter.model}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"input"}
                            typeOfInput={"number"}
                            name={"count"}
                            title={"Количество:"}
                            placeholder={"Количество"}
                            value={filter.count}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"select"}
                            name={"imageStatus"}
                            title={"Изображение товара:"}
                            placeholder={"Изображение товара"}
                            value={filter.imageStatus}
                            items={goodImageStatus}
                            translateBoolean={['Есть', 'Нет']}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                    <div className="filter--item">
                        <FilterInput
                            typeOfField={"select"}
                            name={"goodType.name"}
                            title={"Категория:"}
                            placeholder={"Категория"}
                            value={filter["goodType.name"]}
                            items={goodTypes}
                            changeGoodFilter={changeGoodFilter}
                        />
                    </div>
                </div>
                <FilterInput
                    typeOfField={"button"}
                    typeOfButton={"submit"}
                />
            </form>
        </div>
    )
}


export default GoodFilter