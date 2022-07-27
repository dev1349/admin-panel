import React from 'react'
import { createStyled } from '../../../../../services/style/createStyled'

const ArrowStyled = createStyled('ArrowIconStyle', 'svg')

const ArrowLeftIcon = ({ onClick }) => {
    return (
        <ArrowStyled width="25" height="57" viewBox="0 0 25 57" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path d="M24 56L2 28.5L24 1" stroke="#4F70A0" strokeWidth="2" />
        </ArrowStyled>
    )
}

export default ArrowLeftIcon
