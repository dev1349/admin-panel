import React from 'react'
import { styled } from '@mui/material'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import IconButton from '../../buttons/iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import ButtonsWrapperTemplate from '../../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import TitleAndButtonsTemplate from '../../../templates/titleAndButtonsTemplate/TitleAndButtonsTemplate'

export const Header1Styled = styled('header', {
    name: 'Header1Styled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSHeader1 = ({
    mode,
    children,
    toAdd,
    toReturn,
    isAllButtonDisabled,
    toSave,
    isSaveButtonDisabled,
    toDelete,
    isDeleteButtonDisabled,
}) => {
    return (
        <Header1Styled>
            <TitleAndButtonsTemplate>
                <H1>{children}</H1>
                <ButtonsWrapperTemplate>
                    {mode === 'list' && (
                        <>
                            <IconButton
                                onClick={toAdd}
                                disabled={isAllButtonDisabled}
                            >
                                <AddIcon />
                            </IconButton>
                            <IconButton
                                onClick={toDelete}
                                disabled={isDeleteButtonDisabled}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                    {(mode === 'add' || mode === 'edit') && (
                        <>
                            <IconButton
                                disabled={isSaveButtonDisabled}
                                onClick={toSave}
                            >
                                <SaveIcon />
                            </IconButton>
                            <IconButton
                                onClick={toReturn}
                                disabled={isAllButtonDisabled}
                            >
                                <UndoIcon />
                            </IconButton>
                        </>
                    )}
                </ButtonsWrapperTemplate>
            </TitleAndButtonsTemplate>
        </Header1Styled>
    )
}

export default WSHeader1
