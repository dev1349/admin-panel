import React from 'react'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Container from '../../../templates/container/Container'
import ImageList from '../imageList/ImageList'

const LabeledImageList = ({ id, label, ...rest }) => {
    return (
        <Container>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <Container imageListBorder>
                    <ImageList id={id} {...rest} />
                </Container>
            </LabeledInputTemplate>
        </Container>
    )
}

export default LabeledImageList
