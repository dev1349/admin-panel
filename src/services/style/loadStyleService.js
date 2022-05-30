import { styledComponents } from './registrationStyleService'
import { getThemeFetch } from '../../api/styleApi'
import { themeDeserialize } from './themeDeserializationService'

export const loadStyles = (loadType, themeName) => {
    if ('server' === loadType) {
        return serverLoading(themeName)
    } else {
        return localLoading()
    }
}

const localLoading = () => {
    return new Promise(resolve => resolve(styledComponents))
}

const serverLoading = name => {
    return getThemeFetch(name).then(data => themeDeserialize(data))
}
