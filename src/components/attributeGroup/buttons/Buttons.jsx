import React from 'react'
import Button from './Button'
import styled from 'styled-components'


const ButtonGroup = styled.div`
  display: flex;
`


const Buttons = ({
                     attributeGroupMode,
                     isButtonDisabled,
                     changeAttributeGroupMode,
                     removeSelectedAttributesGroup,
                     saveAttributeGroup,
                     isDeletingListEmpty
                 }) => {

    const resetToListModeHandler = () => {
        changeAttributeGroupMode('list')
    }

    const resetToAddModeHandler = () => {
        changeAttributeGroupMode('add')
    }

    return (
        <ButtonGroup>

            {attributeGroupMode === 'list' && <Button
                icon={'#plus'}
                onClick={resetToAddModeHandler}
                disabled={isButtonDisabled}
            />}
            {attributeGroupMode === 'list' && <Button
                icon={'#delete'}
                onClick={removeSelectedAttributesGroup}
                disabled={isButtonDisabled || isDeletingListEmpty}
            />}
            {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <Button
                icon={'#save'}
                onClick={saveAttributeGroup}
                disabled={isButtonDisabled}
            />}
            {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <Button
                icon={'#reply'}
                onClick={resetToListModeHandler}
                disabled={isButtonDisabled}
            />}

        </ButtonGroup>
    )
}


export default Buttons