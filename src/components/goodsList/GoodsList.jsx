import React from 'react'
import './GoodsList.sass'

export const GoodsList = ({allGoods, deleteHandler}) => (
    <div className='GoodList'>
        {allGoods && allGoods.map(el => (
            <div className="good" key={el.id}>
                <p className="list-item">{el.name}</p>
                <p className="list-item">{el.description}</p>
                <p className="list-item">{el.price}</p>
                <p className="list-item">{el.salePrice}</p>
                <button className="list-item" onClick={() => deleteHandler(el)}>delete</button>
                <button className="list-item">change</button>
            </div>
        ))}
    </div>
)