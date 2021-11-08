import React from 'react'
import TitleTextPaddingLeftTemplate from '../titleTextPaddingLeftTemplate/TitleTextPaddingLeftTemplate'
import FlexStartWithPaddingTemplate from '../flexStartWithPaddingTemplate/FlexStartWithPaddingTemplate'

const IconTitleTemplate = ({ children }) => {
    return (
        <FlexStartWithPaddingTemplate>
            {children[0]}
            <TitleTextPaddingLeftTemplate>
                {children[1]}
            </TitleTextPaddingLeftTemplate>
        </FlexStartWithPaddingTemplate>
    )
}

export default IconTitleTemplate
