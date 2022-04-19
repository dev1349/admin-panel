import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const RightBottomPositionTemplate = ({ children }) => {
    const FlexContainerStyled = useStyle('FlexContainerStyle', 'div')
    const RelativePositionContainerStyled = useStyle('RelativePositionContainerStyle', 'div')
    const RightBottomContainerStyled = useStyle('RightBottomContainerStyle', 'div')
    return (
        <FlexContainerStyled>
            <RelativePositionContainerStyled>
                {children[0]}
                <RightBottomContainerStyled>
                    {children[1]}
                </RightBottomContainerStyled>
            </RelativePositionContainerStyled>
        </FlexContainerStyled>
    )
}

export default RightBottomPositionTemplate
