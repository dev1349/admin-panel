import React from 'react'
import './AttributesList.sass'

export const AttributesList = props => (
    <div className={props.showComp}>
        <div className={'attributes-list attributes-list-header-color'}>
            <div>
                <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={props.handleSetCheckBox}
                    className={'status'}
                />
            </div>
            <div
                onClick={() => props.sortFunc('name')}
                className={props.getClassName('name')}
            >
                {'Название'}
            </div>
            <div
                onClick={() => props.sortFunc('group')}
                className={props.getClassName('group')}
            >
                {'Група'}
            </div>
            <div
                onClick={() => props.sortFunc('sortingOrder')}
                className={props.getClassName('sortingOrder')}
            >
                {'Порядок сортировки'}
            </div>
            <div>{'Действия'}</div>
        </div>

        {props.attributeData.map(el => {
            return (
                <div className={'attributes-list'} key={el.id}>
                    <div>
                        <input
                            type="checkbox"
                            defaultChecked={el.status}
                            onChange={props.handleSetCheckBox}
                            className={'status'}
                            id={el.id}
                        />
                    </div>
                    <div>
                        {el.name}
                        {el.nameEng ? '/' + el.nameEng : ''}
                    </div>
                    <div>{el.group}</div>
                    <div>{el.sortingOrder}</div>
                    <div onClick={() => props.editAttribute(el)}>
                        {props.action}
                    </div>
                </div>
            )
        })}
    </div>
)
