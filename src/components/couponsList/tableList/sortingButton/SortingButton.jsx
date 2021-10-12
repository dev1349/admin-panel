import React from 'react'
import styled from 'styled-components'
import Icon from '../../icon/Icon'

const TitleButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.fontTitleColor || 'black'};
`

const TitleCaption = styled.span`
    margin-right: 5px;
`

const SortingButton = ({ title, sortingStatus, changeSortingStatus }) => {
    return (
        <TitleButton onClick={changeSortingStatus}>
            <TitleCaption>{title}</TitleCaption>
            <Icon
                icon={
                    sortingStatus === 'none' || sortingStatus === 'down'
                        ? '#sort-down'
                        : '#sort-up'
                }
                size={10}
            />
        </TitleButton>
    )
}

export default SortingButton
