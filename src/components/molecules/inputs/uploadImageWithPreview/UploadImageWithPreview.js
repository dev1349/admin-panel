import React, { useEffect, useState } from 'react'
import UploadImage from '../uploadImage/UploadImage'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import PreviewNoImage from '../../previewNoImage/PreviewNoImage'
import PreviewImage from '../../previewImage/PreviewImage'
import RightBottomPositionTemplate from '../../../templates/rightBottomPositionTemplate/RightBottomPositionTemplate'
import IconButton from '../../buttons/iconButton/IconButton'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'

const UploadImageWithPreview = ({ img = null, name, title, onChange }) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        setImage(img)
    }, [img])

    const handleDeleteImage = () => {
        setImage(null)
    }

    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        if (!image) {
            setImagePreview(null)
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            setImagePreview(reader.result)
            reader.onload = null
        }
        reader.readAsDataURL(image)
    }, [image, setImagePreview])

    useEffect(() => {
        onChange({ [name]: image })
    }, [image])

    return (
        <LabeledInputTemplate>
            {imagePreview ? (
                <RightBottomPositionTemplate>
                    <PreviewImage src={imagePreview} alt="delivery image" />
                    <IconButton onClick={handleDeleteImage}>
                        <DeleteIcon />
                    </IconButton>
                </RightBottomPositionTemplate>
            ) : (
                <PreviewNoImage />
            )}

            <UploadImage title={title} setImage={setImage} image={image} />
        </LabeledInputTemplate>
    )
}

export default UploadImageWithPreview
