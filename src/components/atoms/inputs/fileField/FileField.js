import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const FileFieldStyled = createStyled('FileFieldStyled', 'input')

const FileField = ({ refer, ...rest }) => {
    return <FileFieldStyled type={'file'} ref={refer} {...rest} />
}

export default FileField
