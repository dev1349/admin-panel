import React from 'react'
import './AddGood.sass'
import ContainerWithHead from './ContainerWithHead'
import TabsContainer from "./Tabs/TabsContainer";

export const AddGood = props => (
    <ContainerWithHead
        icon={"#edit"}
        title={"Добавление товара"}
    >
        <TabsContainer>
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
                        <option/>
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
            <div>hello</div>
            <div>hello 2</div>
        </TabsContainer>
    </ContainerWithHead>


)