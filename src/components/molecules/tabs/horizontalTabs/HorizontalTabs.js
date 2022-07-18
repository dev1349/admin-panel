import React, { useState } from 'react'
import { Box } from '@mui/material'
import HorizontalTabTitles from '../horizontalTabTitles/HorizontalTabTitles'
import TabPanel from '../../../atoms/tabs/tabPanel/TabPanel'
import { createStyled } from '../../../../services/style/createStyled'

const HorizontalTabsBoxStyled = createStyled('HorizontalTabsBoxStyle', Box)

const WSTabsHorizontal = ({ titles, children, ...rest }) => {
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
            <HorizontalTabTitles titles={titles} value={value} onChange={handleChange} {...rest} />
            {tabsContent.map((ch, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {ch}
                </TabPanel>
            ))}
        </HorizontalTabsBoxStyled>
    )
}

export default WSTabsHorizontal
