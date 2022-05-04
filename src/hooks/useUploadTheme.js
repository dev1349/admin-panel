import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { putTheme, themeNameSelector } from '../reducers/styleSlice'
import { styledComponents } from '../services/style/registrationStyleService'
import { themeSerialize } from '../services/style/themeSerializationService'

export const useUploadTheme = () => {
    const name = useSelector(themeNameSelector)
    const data = themeSerialize(name, styledComponents)

    useEffect(() => {
        putTheme(data)
    })
}
