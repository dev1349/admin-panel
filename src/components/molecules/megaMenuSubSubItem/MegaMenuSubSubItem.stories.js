import React from 'react'
import MegaMenuSubSubItem from './MegaMenuSubSubItem'

export default {
    title: 'molecules/MegaMenuSubSubItem',
    component: MegaMenuSubSubItem,
}

const Template = args => <MegaMenuSubSubItem {...args} />

export const DefaultMegaMenuSubItem = Template.bind({})
DefaultMegaMenuSubItem.args = {
    subSubItem: {
        id: 208,
        name: 'Ghjcnj ntrcn',
        ordering: 4,
        parentItem: null,
        subItemList: [],
        url: '/subcategories/59',
    },
    activeSubSubItemId: 208,
    setActiveThirdLevelItem: subItem => () => console.log(subItem),
    onDeleteMegaMenuItem: id => () => console.log('click', id),
    onChangeMegaMenuItem:
        ({ id, url }) =>
        () =>
            console.log(id, url),
}
