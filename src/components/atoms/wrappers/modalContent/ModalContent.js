import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const ModalContentStyled = createStyled('ModalContentStyle', 'div')

const ModalContent = ({ children, forwardedRef, ...rest }) => {
    return (
        <ModalContentStyled {...rest} ref={forwardedRef}>
            {children}
        </ModalContentStyled>
    )
}

export default React.forwardRef((props, ref) => (
    <ModalContent {...props} forwardedRef={ref} />
))
