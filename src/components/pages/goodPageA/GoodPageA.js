import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Template1 } from '../../templates/template1/Template1'
import { SectionA } from '../../atoms/sectionA/SectionA'
import { useSelector } from 'react-redux'
import { style } from '../../../reducers/styleSlice'

//todo: удалить после перехода на atomic design
export const GoodPageA = () => {
    const theme = useSelector(style)

    return (
        <ThemeProvider theme={theme}>
            <Template1>
                <SectionA text={'Section1'} color={theme.color1} />
                <SectionA text={'Section2'} color={theme.color2} />
                <SectionA text={'Section3'} color={theme.color3} />
            </Template1>
        </ThemeProvider>
    )
}

export const GoodPageAStory = ({ color1, color2, color3 }) => {
    const sections = [
        <SectionA key={1} text={'Section1'} color={color1} />,
        <SectionA key={2} text={'Section2'} color={color2} />,
        <SectionA key={3} text={'Section3'} color={color3} />,
    ]

    return <Template1>{sections}</Template1>
}
