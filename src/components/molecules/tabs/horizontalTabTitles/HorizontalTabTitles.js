import React from 'react'
import { Tabs } from '@mui/material'
import Tab from '../../../atoms/tabs/tabTitle/TabTitle'
import TabTitlesWrapper from '../../../atoms/tabs/tabTitlesWrapper/TabTitlesWrapper'
import { useStyle } from '../../../../hooks/useStyle'

const a11yProps = index => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const WSHorizontalTabTitles = ({ titles, value, onChange, ...rest }) => {
    const HorizontalTabTitlesStyled = useStyle('HorizontalTabTitlesStyle', Tabs)
    return (
        <TabTitlesWrapper>
            <HorizontalTabTitlesStyled
                value={value}
                onChange={onChange}
                aria-label="basic tabs example"
                {...rest}
            >
                {titles.map((title, index) => (
                    <Tab key={index} label={title} {...a11yProps(index)} />
                ))}
            </HorizontalTabTitlesStyled>
        </TabTitlesWrapper>
    )
}

export default WSHorizontalTabTitles
