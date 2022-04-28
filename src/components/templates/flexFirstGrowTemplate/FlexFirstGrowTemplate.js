import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const FlexFirstGrowTemplate = ({ children, noMargin, ...rest }) => {
    const FlexFirstGrowTemplateStyled = useStyle('FlexFirstGrowTemplateStyle', 'div',
        ['noPadding', 'alignItemsCenter'])
    const FirstElementTemplateStyled = useStyle('FirstElementTemplateStyle', 'div')
    const OtherElementTemplateStyled = useStyle('OtherElementTemplateStyle', 'div', ['noMargin'])

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
