import React from 'react'
import './addAtribute.sass'

export const AddAttribute = props => {
    let name
    props.prevData?.name ? (name = props.prevData.name) : (name = '')
    const changeFieldValueHandler = evt => {
        let sendValue
        sendValue = evt.target.value
        props.postAttribute({
            [evt.target.name]: sendValue,
        })
    }

    return (
        <div className={props.className + props.showComp}>
            <div className="input-block-name">
                <div className="attribute-block">
                    <p>Название</p>
                    <div className="wrap">
                        <input
                            className="input-name"
                            placeholder="Название"
                            onChange={changeFieldValueHandler}
                            name="name"
                            value={name}
                        />
                        <input
                            className="input-name"
                            placeholder="Название"
                            onChange={props.postAttribute}
                            name="nameEng"
                        />
                    </div>
                </div>
                <div className="attribute-block">
                    <p>Група</p>
                    {props.attributeGroup && (
                        <select
                            onChange={changeFieldValueHandler}
                            name="attributeGroup"
                            value={props.prevData.attributeGroup}
                        >
                            <option value="" />
                            {props.attributeGroup.map(el => {
                                return (
                                    <option key={el.id} value={el.id}>
                                        {el.name}
                                    </option>
                                )
                            })}
                        </select>
                    )}
                </div>
                <div className="attribute-block">
                    <p>Порядок сортировки</p>
                    <input
                        className="input-name"
                        placeholder="Порядок сортировки"
                        onChange={props.postAttribute}
                        name="sortingOrder"
                    />
                </div>
            </div>
        </div>
    )
}
