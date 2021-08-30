import React from 'react'
import './GoodList.sass'

export const GoodList = (props) => (
    <div className='GoodList'>
        {props.allGood && props.allGood.map(el => (
            <div className="good" key={el.id}>
                <p className="list-item">{el.name}</p>
                <p className="list-item">{el.description}</p>
                <p className="list-item">{el.price}</p>
                <p className="list-item">{el.salePrice}</p>
                <button className="list-item" onClick={() => props.handleDelete(el)}>delete</button>
                <button className="list-item">change</button>
            </div>
        ))}
    </div>
)