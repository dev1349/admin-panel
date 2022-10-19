import React, { forwardRef } from 'react'
import IconButton from '@mui/material/IconButton'
import { createStyled } from '../../../../services/style/createStyled'

const IconButtonStyled = createStyled('IconButtonStyle', IconButton, [
    'menuButton',
    'dialogButton',
    'checkedImages',
    'editItemButton',
    'editItemButtonSmall',
])

const IconButtonAtom = forwardRef(({ children, ...rest }, ref) => {
    return (
        <IconButtonStyled ref={ref} {...rest}>
            {children}
        </IconButtonStyled>
    )
})

IconButtonAtom.displayName = 'IconButtonAtom'

export default IconButtonAtom
