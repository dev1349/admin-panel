import React from 'react'


const TabTitle = ({title, isTabActive, onClickHandler}) => {
    const tabClasses = ['addCategory--tabTitle']

    if (isTabActive) tabClasses.push('addCategory--tabTitle__active')

    return (
        <li className={tabClasses.join(' ')} onClick={onClickHandler}>
            {title}
        </li>
    )
}


export default TabTitle