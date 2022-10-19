import React from 'react'
import MegaMenuItem from './MegaMenuItem'

export default {
    title: 'molecules/MegaMenuItem',
    component: MegaMenuItem,
}

const Template = args => (
    <div style={{ backgroundColor: '#c4c4c4', padding: '10px' }}>
        <MegaMenuItem {...args} />
    </div>
)

export const DefaultMegaMenuItem = Template.bind({})
DefaultMegaMenuItem.args = {
    firstLevelItem: {
        id: 208,
        name: 'Ghjcnj ntrcn',
        ordering: 4,
        parentItem: null,
        subItemList: [
            {
                id: 209,
                name: 'asdfasdfasdf',
                ordering: 1,
                parentItem: 208,
                subItemList: [],
                url: '/subcategories/59',
            },
        ],
        url: '/subcategories/59',
    },
    setActiveFirstLevelItem: item => () => console.log(item),
    activeFirstLevelItemId: 208,
    hoveredFirstLevelItemId: 208,
    onDeleteMegaMenuItem: id => () => console.log(id),
    onChangeMegaMenuItem:
        ({ id, url }) =>
        () =>
            console.log(id, url),
}
