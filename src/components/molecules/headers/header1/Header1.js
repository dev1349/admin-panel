import React from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import IconButton from '../../buttons/iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import ButtonsWrapperTemplate from '../../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import TitleAndButtonsTemplate from '../../../templates/titleAndButtonsTemplate/TitleAndButtonsTemplate'
import { useStyle } from '../../../../hooks/useStyle'

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
    const Header1Styled = useStyle('Header1Style', 'header')
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
                                <AddIcon/>
                            </IconButton>
                            <IconButton
                                onClick={toDelete}
                                disabled={isDeleteButtonDisabled}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </>
                    )}
                    {(mode === 'add' || mode === 'edit') && (
                        <>
                            <IconButton
                                disabled={isSaveButtonDisabled}
                                onClick={toSave}
                            >
                                <SaveIcon/>
                            </IconButton>
                            <IconButton
                                onClick={toReturn}
                                disabled={isAllButtonDisabled}
                            >
                                <UndoIcon/>
                            </IconButton>
                        </>
                    )}
                </ButtonsWrapperTemplate>
            </TitleAndButtonsTemplate>
        </Header1Styled>
    )
}

export default WSHeader1
