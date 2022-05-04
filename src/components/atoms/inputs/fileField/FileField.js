import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const FileField = ({ refer, ...rest }) => {
    const InputStyled = useStyle('InputStyle', 'input')
    return <InputStyled type={'file'} ref={refer} {...rest} />
}

export default FileField
