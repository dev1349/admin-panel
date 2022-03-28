import React, { useEffect, useRef } from 'react'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'
import AddImageIcon from '../../../atoms/icons/addImageIcon/AddImageIcon'
import FileField from '../../../atoms/inputs/fileField/FileField'
import { visuallyHidden } from '@mui/utils'

const UploadImage = ({ title, image, setImage }) => {
    const fileInputRef = useRef(null)

    const handleClickFileInput = () => fileInputRef.current.click()

    const handleChangeFileInput = event => {
        const file = [...event.target.files][0]
        if (!file) return
        if (!(file.type === 'image/png' || file.type === 'image/jpeg')) return
        setImage(file)
    }

    useEffect(() => {
        if (!image) {
            fileInputRef.current.value = ''
        }
    }, [image])

    return (
        <>
            <SimpleButton
                startIcon={<AddImageIcon />}
                onClick={handleClickFileInput}
            >
                {title}
            </SimpleButton>
            <FileField
                refer={fileInputRef}
                sx={visuallyHidden}
                // value={image}
                onChange={handleChangeFileInput}
            />
        </>
    )
}

export default UploadImage
