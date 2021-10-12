import React from 'react'
import styled, { css } from 'styled-components'

const TabsContainer = styled.div`
    position: relative;
`

const TabTitlesContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
`

const TabTitle = styled.li`
    padding: 5px 10px;
    box-sizing: border-box;
    cursor: pointer;
    ${props =>
        props.active &&
        css`
            order: 100;
            border: 1px solid #444;
            border-bottom: 1px solid white;
            font-weight: bold;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            @media (min-width: 1188px) {
                order: unset;
            }
        `}
`

const TabContentsContainer = styled.div`
    position: relative;
    top: -1px;
`

const TabContent = styled.div`
    border: 1px solid #444;
    padding: 10px;
`

const Tabs = ({ titles, activeTab, onChangeActiveTab, children }) => {
    let contents = new Array(titles.length).fill(null)

    if (Array.isArray(children)) {
        for (let i = 0; i < titles.length; i++) {
            contents[i] = children[i]
        }
    } else {
        contents[0] = children
    }

    return (
        <TabsContainer>
            <TabTitlesContainer>
                {titles.map(title => (
                    <TabTitle
                        key={title.id}
                        active={activeTab === title.id}
                        onClick={() => onChangeActiveTab(title.id)}
                    >
                        {title.name}
                    </TabTitle>
                ))}
            </TabTitlesContainer>
            <TabContentsContainer>
                {contents.map((content, index) => (
                    <React.Fragment key={index}>
                        {activeTab === index && (
                            <TabContent>{content}</TabContent>
                        )}
                    </React.Fragment>
                ))}
            </TabContentsContainer>
        </TabsContainer>
    )
}

export default Tabs
