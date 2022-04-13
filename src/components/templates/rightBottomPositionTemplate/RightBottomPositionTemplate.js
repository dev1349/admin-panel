import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FlexContainerStyle from './FlexContainerStyle'
import RelativePositionContainerStyle from './RelativePositionContainerStyle'
import RightBottomContainerStyle from './RightBottomContainerStyle'


const RightBottomPositionTemplate = ({ children }) => {
    const FlexContainerStyled = useStyle('FlexContainerStyled', 'div', FlexContainerStyle)
    const RelativePositionContainerStyled = useStyle('RelativePositionContainerStyled', 'div', RelativePositionContainerStyle)
    const RightBottomContainerStyled = useStyle('RightBottomContainerStyled', 'div', RightBottomContainerStyle)
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
