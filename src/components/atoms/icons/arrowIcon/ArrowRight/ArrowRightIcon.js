import React from 'react'
import { createStyled } from '../../../../../services/style/createStyled'

const ArrowStyled = createStyled('ArrowIconStyle', 'svg')

const ArrowRightIcon = ({ onClick }) => {
    return (
        <ArrowStyled width="25" height="57" viewBox="0 0 25 57" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path d="M1 1L23 28.5L1 56" stroke="#4F70A0" strokeWidth="2" />
        </ArrowStyled>
    )
}

export default ArrowRightIcon
