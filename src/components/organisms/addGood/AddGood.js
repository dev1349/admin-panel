import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import Container from '../../templates/container/Container'
import Tabs from '../../atoms/tabs/tabs/Tabs'
import TabPanel from '../../atoms/tabs/tabPanel/TabPanel'
import LinkTab from '../../atoms/tabs/linkTab/LinkTab'

const AddGood = ({ icon, title, buttons, urlPathToAddGoodPage, activeTabLink, tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const a11yProps = index => ({
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    })

    const handleSetActiveTab = (event, newValue) => {
        setActiveTabIndex(newValue)
    }

    useEffect(() => {
        const mustBeActiveTab = tabs.find(tab => tab.link === activeTabLink)
        if (mustBeActiveTab) {
            const mustBeActiveTabIndex = mustBeActiveTab.id
            setActiveTabIndex(mustBeActiveTabIndex)
            return
        }
        setActiveTabIndex(-1)
    }, [tabs, activeTabLink, setActiveTabIndex])

    return (
        <>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <Container tabsContainer>
                    <Tabs
                        dialogTabs
                        value={activeTabIndex}
                        onChange={handleSetActiveTab}
                        aria-label="good tabs"
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        {...a11yProps}
                    >
                        {tabs.map(({ id, label, link }) => (
                            <LinkTab
                                dialogTab
                                key={id}
                                label={label}
                                disableRipple
                                to={link ? urlPathToAddGoodPage + '/' + link : urlPathToAddGoodPage}
                            />
                        ))}
                    </Tabs>
                    {tabs.map(({ id, link, tabPanel }) => (
                        <TabPanel key={id} activeTabLink={activeTabLink} link={link} index={id}>
                            <Container tabPanelContent>{tabPanel}</Container>
                        </TabPanel>
                    ))}
                </Container>
            </AdminPageBorder>
        </>
    )
}

export default AddGood
