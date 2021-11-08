import React from 'react'
import { styled } from '@mui/material'
import { Tabs } from '@mui/material'
import Tab from '../../../atoms/tabs/tabTitle/TabTitle'
import TabTitlesWrapper from '../../../atoms/tabs/tabTitlesWrapper/TabTitlesWrapper'

const a11yProps = index => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const HorizontalTabTitlesStyled = styled(Tabs, {
    name: 'HorizontalTabTitlesStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSHorizontalTabTitles = ({ titles, value, onChange }) => {
    return (
        <TabTitlesWrapper>
            <HorizontalTabTitlesStyled
                value={value}
                onChange={onChange}
                aria-label="basic tabs example"
            >
                {titles.map((title, index) => (
                    <Tab key={index} label={title} {...a11yProps(index)} />
                ))}
            </HorizontalTabTitlesStyled>
        </TabTitlesWrapper>
    )
}

export default WSHorizontalTabTitles
