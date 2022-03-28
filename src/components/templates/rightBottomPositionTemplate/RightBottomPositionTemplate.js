import React from 'react'
import { styled } from '@mui/material'

const FlexContainerStyled = styled('div', {
    name: 'FlexContainerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const RelativePositionContainerStyled = styled('div', {
    name: 'RelativePositionContainerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const RightBottomContainerStyled = styled('div', {
    name: 'RightBottomContainerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const RightBottomPositionTemplate = ({ children }) => {
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
