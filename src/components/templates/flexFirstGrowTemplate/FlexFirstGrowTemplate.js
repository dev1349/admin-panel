import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FlexFirstGrowTemplateStyle from './FlexFirstGrowTemplateStyle'
import FirstElementTemplateStyle from './FirstElementTemplateStyle'
import OtherElementTemplateStyle from './OtherElementTemplateStyle'


const FlexFirstGrowTemplate = ({ children, noMargin, ...rest }) => {
    const FlexFirstGrowTemplateStyled = useStyle('FlexFirstGrowTemplateStyled', 'div', FlexFirstGrowTemplateStyle,
        'noPadding', 'alignItemsCenter')
    const FirstElementTemplateStyled = useStyle('FirstElementTemplateStyled', 'div', FirstElementTemplateStyle)
    const OtherElementTemplateStyled = useStyle('OtherElementTemplateStyled', 'div', OtherElementTemplateStyle, noMargin)

    const isManyChildren = Array.isArray(children)

    return (
        <FlexFirstGrowTemplateStyled {...rest}>
            <FirstElementTemplateStyled>
                {isManyChildren ? children[0] : children}
            </FirstElementTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => (
                        <OtherElementTemplateStyled
                            key={index}
                            noMargin={noMargin}
                        >
                            {elem}
                        </OtherElementTemplateStyled>
                    ))}
        </FlexFirstGrowTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
