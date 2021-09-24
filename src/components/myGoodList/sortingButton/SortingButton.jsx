import React from 'react'
import {TitleButton, TitleCaption} from '../styledComponents'
import Icon from '../Icon'


const SortingButton = ({title, name, sortingStatus, changeMyGoodListSortingStatus}) => {
    const sortButtonClickHandler = () => {
        changeMyGoodListSortingStatus(name)
    }

    return (
        <TitleButton onClick={sortButtonClickHandler}>
            <TitleCaption>{title}</TitleCaption>
            <Icon
                icon={(Object.keys(sortingStatus).length === 0 || !sortingStatus[name] || sortingStatus[name] === 'down') ? '#sort-down' : '#sort-up'}
                titleIcon
            />
        </TitleButton>
    )
}


export default SortingButton