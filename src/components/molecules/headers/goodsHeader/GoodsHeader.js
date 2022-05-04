import React from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import IconButton from '../../buttons/iconButton/IconButton'
import ButtonsWrapperTemplate from '../../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs'
import TitleBreadcrumbsButtonsTemplate
    from '../../../templates/titleBreadcrumbsButtonsTemplate/TitleBreadcrumbsButtonsTemplate'
import { useStyle } from '../../../../hooks/useStyle'

const GoodsHeader = ({ title, buttons, breadcrumbs }) => {
    const Header1Styled = useStyle('Header1Style', 'header')
    return (
        <Header1Styled>
            <TitleBreadcrumbsButtonsTemplate>
                <H1>{title}</H1>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
                <ButtonsWrapperTemplate>
                    <IconButton onClick={buttons.add.addGood}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton
                        onClick={buttons.delete.deleteGood}
                        disabled={buttons.delete.isDeleteButtonDisabled}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ButtonsWrapperTemplate>
            </TitleBreadcrumbsButtonsTemplate>
        </Header1Styled>
    )
}

export default GoodsHeader
