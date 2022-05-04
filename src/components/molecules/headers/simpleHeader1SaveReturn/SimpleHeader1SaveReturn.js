import React from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import IconButton from '../../buttons/iconButton/IconButton'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import ButtonsWrapperTemplate from '../../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import TitleAndButtonsTemplate from '../../../templates/titleAndButtonsTemplate/TitleAndButtonsTemplate'
import { useStyle } from '../../../../hooks/useStyle'

const WSSimpleHeader1SaveReturn = ({
                                       children,
                                       onSave,
                                       onReturn,
                                       isSaveButtonDisabled,
                                       isReturnButtonDisabled,
                                   }) => {
    const Header1Styled = useStyle('Header1Style', 'header')
    return (
        <Header1Styled>
            <TitleAndButtonsTemplate>
                <H1>{children}</H1>
                <ButtonsWrapperTemplate>
                    <IconButton
                        onClick={onSave}
                        disabled={isSaveButtonDisabled}
                    >
                        <SaveIcon/>
                    </IconButton>
                    <IconButton
                        onClick={onReturn}
                        disabled={isReturnButtonDisabled}
                    >
                        <UndoIcon/>
                    </IconButton>
                </ButtonsWrapperTemplate>
            </TitleAndButtonsTemplate>
        </Header1Styled>
    )
}

export default WSSimpleHeader1SaveReturn
