import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const FileField = ({ refer, ...rest }) => {
    const InputStyled = useStyle('InputStyled', 'input', null)
    return <InputStyled type={'file'} ref={refer} {...rest} />
}

export default FileField
