import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import HorizontalTabTitles from '../horizontalTabTitles/HorizontalTabTitles'
import TabPanel from '../../../atoms/tabs/tabPanel/TabPanel'

const HorizontalTabsBoxStyled = styled(Box, {
    name: 'HorizontalTabsBoxStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTabsHorizontal = ({ titles, children }) => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    let tabsContent = new Array(titles.length).fill(null)
    if (Array.isArray(children)) {
        for (let i = 0; i < titles.length; i++) {
            tabsContent[i] = children[i]
        }
    } else {
        tabsContent[0] = children
    }

    return (
        <HorizontalTabsBoxStyled>
            <HorizontalTabTitles
                titles={titles}
                value={value}
                onChange={handleChange}
            />
            {tabsContent.map((ch, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {ch}
                </TabPanel>
            ))}
        </HorizontalTabsBoxStyled>
    )
}

export default WSTabsHorizontal
