import React from 'react'
import { Tabs } from '@mui/material'
import Tab from '../../../atoms/tabs/tab/Tab'
import TabTitlesWrapper from '../../../atoms/tabs/tabTitlesWrapper/TabTitlesWrapper'
import { createStyled } from '../../../../services/style/createStyled'

const a11yProps = index => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const HorizontalTabTitlesStyled = createStyled('HorizontalTabTitlesStyle', Tabs)

const WSHorizontalTabTitles = ({ titles, value, onChange, ...rest }) => {
    return (
        <TabTitlesWrapper>
            <HorizontalTabTitlesStyled value={value} onChange={onChange} aria-label="basic tabs example" {...rest}>
                {titles.map((title, index) => (
                    <Tab key={index} label={title} {...a11yProps(index)} />
                ))}
            </HorizontalTabTitlesStyled>
        </TabTitlesWrapper>
    )
}

export default WSHorizontalTabTitles
