import React from 'react'


const FilterInput = ({
                         typeOfField,
                         typeOfInput,
                         name,
                         title,
                         placeholder,
                         items,
                         translateBoolean,
                         value,
                         setGoodsFilterHandler
                     }) => {

    const createValueForState = (typeOfField, typeOfInput, translateBoolean, evt) => {
        switch (typeOfField) {
            case 'input':
                if (typeOfInput === 'text') {
                    return evt.target.value
                }
                if (typeOfInput === 'number') {
                    return evt.target.value === '' ? null : Number(evt.target.value)
                }
                break
            case 'select':
                if (translateBoolean) {
                    return evt.target.value === 'true' ? true : evt.target.value === '' ? null : false
                } else {
                    return evt.target.value
                }
            default:
                return evt.target.value
        }
    }

    const changeHandler = (evt) => {
        const value = createValueForState(typeOfField, typeOfInput, translateBoolean, evt)
        setGoodsFilterHandler(name, value)
    }

    const inputNumberKeyDown = (evt) => {
        if (evt.code === 'KeyE') {
            evt.preventDefault()
        }
    }

    return (
        <label className="filter--label">
            {title}

            {typeOfField === 'input' && <input
                type={typeOfInput}
                name={name}
                className={"filter--input"}
                placeholder={placeholder}
                value={value || ''}
                onChange={changeHandler}
                onKeyDown={typeOfInput === 'number' ? inputNumberKeyDown : null}
            />}

            {typeOfField === 'select' && <select
                value={value}
                className={"filter--input"}
                onChange={changeHandler}
            >
                <option key={0} value={''}>Выберите вариант</option>

                {items.map((el) => {

                    let title
                    if (typeof (el) === 'boolean') {
                        title = el ? translateBoolean[0] : translateBoolean[1]
                    } else {
                        title = el
                    }

                    return (
                        <option key={el} value={el}>{title}</option>
                    )
                })}

            </select>}

            {typeOfField === 'button' && <button
                type={typeOfInput}
            >
                Фильтровать
            </button>}
        </label>
    )
}


export default FilterInput