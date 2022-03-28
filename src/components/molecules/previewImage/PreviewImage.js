import React from 'react'
import ImageBorder from '../../atoms/wrappers/imageBorder/ImageBorder'
import Img from '../../atoms/img/Img'

const PreviewImage = ({ src, alt }) => {
    return (
        <ImageBorder noSizes noBorder>
            <Img src={src} alt={alt} />
        </ImageBorder>
    )
}

export default PreviewImage
