import React from 'react'
import Form from '../../../atoms/form/Form'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledTextFieldMultiline from '../../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import TextAlignRightTemplate from '../../../templates/textAlignRightTemplate/TextAlignRightTemplate'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'

const EditGood = ({
    name,
    description,
    htmlTitle,
    htmlH1,
    metaDescription,
    metaKeywords,
    saveGood,
    isSaveButtonDisabled,
}) => {
    return (
        <Form>
            <LabeledTextField
                id={name.id}
                label={name.label}
                name={name.name}
                value={name.value}
                onChange={name.onChange}
                autoFocus={name.autoFocus}
            />
            <LabeledTextFieldMultiline
                id={description.id}
                label={description.label}
                name={description.name}
                value={description.value}
                onChange={description.onChange}
            />
            <LabeledTextField
                id={htmlTitle.id}
                label={htmlTitle.label}
                name={htmlTitle.name}
                value={htmlTitle.value}
                onChange={htmlTitle.onChange}
                autoFocus={htmlTitle.autoFocus}
            />
            <LabeledTextField
                id={htmlH1.id}
                label={htmlH1.label}
                name={htmlH1.name}
                value={htmlH1.value}
                onChange={htmlH1.onChange}
                autoFocus={htmlH1.autoFocus}
            />
            <LabeledTextField
                id={metaDescription.id}
                label={metaDescription.label}
                name={metaDescription.name}
                value={metaDescription.value}
                onChange={metaDescription.onChange}
                autoFocus={metaDescription.autoFocus}
            />
            <LabeledTextField
                id={metaKeywords.id}
                label={metaKeywords.label}
                name={metaKeywords.name}
                value={metaKeywords.value}
                onChange={metaKeywords.onChange}
                autoFocus={metaKeywords.autoFocus}
            />
            <TextAlignRightTemplate>
                <IconButton onClick={saveGood} disabled={isSaveButtonDisabled}>
                    <SaveIcon />
                </IconButton>
            </TextAlignRightTemplate>
        </Form>
    )
}

export default EditGood
