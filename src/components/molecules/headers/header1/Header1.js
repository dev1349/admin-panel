import React from 'react'
import styled from 'styled-components'
import H1 from '../../../atoms/headers/H1/H1'
import IconButton from '../../iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import ButtonsWrapperTemplate from '../../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import TitleAndButtonsTemplate from '../../../templates/titleAndButtonsTemplate/TitleAndButtonsTemplate'

const Header1Styled = styled.header``

const MyHeader1 = ({
    mode,
    children,
    toAddGroup,
    returnToListMode,
    saveGroup,
    isSaveGroupButtonDisabled,
    deleteGroup,
    isDeleteButtonDisabled,
}) => {
    return (
        <Header1Styled>
            <TitleAndButtonsTemplate>
                <H1>{children}</H1>
                <ButtonsWrapperTemplate>
                    {mode === 'list' && (
                        <>
                            <IconButton onClick={toAddGroup}>
                                <AddIcon />
                            </IconButton>
                            <IconButton
                                onClick={deleteGroup}
                                disabled={isDeleteButtonDisabled}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                    {(mode === 'add' || mode === 'edit') && (
                        <>
                            <IconButton
                                disabled={isSaveGroupButtonDisabled}
                                onClick={saveGroup}
                            >
                                <SaveIcon />
                            </IconButton>
                            <IconButton onClick={returnToListMode}>
                                <UndoIcon />
                            </IconButton>
                        </>
                    )}
                </ButtonsWrapperTemplate>
            </TitleAndButtonsTemplate>
        </Header1Styled>
    )
}

export default MyHeader1
