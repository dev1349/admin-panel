import React from 'react'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import IconButton from '../../buttons/iconButton/IconButton'
import ArrowBackIcon from '../../../atoms/icons/arrowBackIcon/ArrowBackIcon'

const NewOrderHeader = ({ headerText, handleHeaderButtonClick }) => {
    return (
        <>
            <FlexTemplate alignItemsCenter={true}>
                <IconButton onClick={handleHeaderButtonClick}>
                    <ArrowBackIcon />
                </IconButton>
                <H1>{headerText}</H1>
            </FlexTemplate>
        </>
    )
}

export default NewOrderHeader
