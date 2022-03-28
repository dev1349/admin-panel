import React from 'react'
import HideImageIcon from '../../atoms/icons/hideImageIcon/HideImageIcon'
import ImageBorder from '../../atoms/wrappers/imageBorder/ImageBorder'

const PreviewNoImage = () => {
    return (
        <ImageBorder>
            <HideImageIcon />
        </ImageBorder>
    )
}

export default PreviewNoImage
