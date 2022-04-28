import { styled } from '@mui/material'

export const useStyle = (name, tag, shouldForwardProps) => {
    if (shouldForwardProps === undefined) {
        return styled(tag, {
            name: name,
            slot: 'Root', // todo проверить необходимость параметра для slot
            overridesResolver: (props, styles) => [styles.root],
        })``
    } else {
        let res
        let arr = [] // todo переделать на previous & current
        if (!Array.isArray(shouldForwardProps)) {
            res = prop => prop !== shouldForwardProps
        } else {
            shouldForwardProps.forEach((el, i) => {
                if (i > 0) {
                    arr.push(prop => arr[i - 1](prop) && prop !== el)
                } else {
                    arr.push(prop => prop !== el)
                }
            })
            res = arr.at(-1)
        }
        return styled(tag, {
            name: name,
            slot: 'Root',
            overridesResolver: (props, styles) => [styles.root],
            shouldForwardProp: prop => res(prop)
        })``
    }
}
