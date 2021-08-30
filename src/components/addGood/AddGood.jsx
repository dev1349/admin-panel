import React from 'react'
import './AddGood.sass'

export const AddGood = props => (
    <form className="AddGood">
        <div className='form-row'>
            <label className="form-item-label">Название</label>
            <input className="form-item" type="text"
                   name="name"
                   onChange={props.handleChange}/>
        </div>
        <div className='form-row'>
            <label className="form-item-label">Описание</label>
            <input className="form-item" type="text"
                   name="description"
                   onChange={props.handleChange}/>
        </div>
        <div className='form-row'>
            <label className="form-item-label">Тип</label>
            <select className="form-item" name="goodType" onChange={props.handleChangeSelect}>
                <option></option>
                {props.allGoodType && props.allGoodType.map((el, index) => (
                    <option key={index} value={index}>{el.name}</option>
                ))}
            </select>
        </div>
        <div className='form-row'>
            <label className="form-item-label">Цена</label>
            <input className="form-item"
                   type="text"
                   name="price"
                   onChange={props.handleChange}/>
        </div>
        <div className='form-row'>
            <label className="form-item-label">Цена распродажи</label>
            <input className="form-item"
                   type="text"
                   name="salePrice"
                   onChange={props.handleChange}/>
        </div>

        <div className='form-row'>
            <input className="form-item" type="button" onClick={props.handleSubmit} value={'Создать'}/>
        </div>
    </form>
)