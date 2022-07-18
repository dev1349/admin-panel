import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FlexContainerStyled = createStyled('FlexContainerStyle', 'div')
const RelativePositionContainerStyled = createStyled('RelativePositionContainerStyle', 'div')
const RightBottomContainerStyled = createStyled('RightBottomContainerStyle', 'div')

const RightBottomPositionTemplate = ({ children }) => {
    return (
        <FlexContainerStyled>
            <RelativePositionContainerStyled>
                {children[0]}
                <RightBottomContainerStyled>{children[1]}</RightBottomContainerStyled>
            </RelativePositionContainerStyled>
        </FlexContainerStyled>
    )
}

export default RightBottomPositionTemplate
