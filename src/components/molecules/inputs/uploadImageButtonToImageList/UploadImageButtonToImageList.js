import React, { useRef } from 'react'
import Container from '../../../templates/container/Container'
import IconButton from '../../buttons/iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import { visuallyHidden } from '@mui/utils'
import FileField from '../../../atoms/inputs/fileField/FileField'

const UploadImageButtonToImageList = ({ uploadImage }) => {
    const fileInputRef = useRef(null)

    const handleClickFileInput = () => fileInputRef.current.click()

    const handleChangeFileInput = async event => {
        const files = [...event.target.files]
        if (!files.length) return
        const allData = []
        files.forEach((file, index) => {
            if (!(file.type === 'image/png' || file.type === 'image/jpeg')) return
            const data = new FormData()
            data.append('file', files[index])
            allData.push(data)
        })
        await uploadImage(allData)
        fileInputRef.current.value = null
    }

    return (
        <Container imageInImageListContainer>
            <Container uploadImageButtonToImageListContainer>
                <IconButton dialogButton disableRipple onClick={handleClickFileInput}>
                    <AddIcon dialogIcon />
                </IconButton>
                <FileField refer={fileInputRef} sx={visuallyHidden} onChange={handleChangeFileInput} multiple />
            </Container>
        </Container>
    )
}

export default UploadImageButtonToImageList
