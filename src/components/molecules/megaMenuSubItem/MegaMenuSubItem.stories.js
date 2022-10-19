import React from 'react'
import MegaMenuSubItem from './MegaMenuSubItem'

export default {
    title: 'molecules/MegaMenuSubItem',
    component: MegaMenuSubItem,
}

const Template = args => <MegaMenuSubItem {...args} />

export const DefaultMegaMenuSubItem = Template.bind({})
DefaultMegaMenuSubItem.args = {
    subItem: {
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
            {
                id: 219,
                name: 'asdfasdfasdf',
                ordering: 1,
                parentItem: 208,
                subItemList: [],
                url: '/subcategories/59',
            },
            {
                id: 229,
                name: 'asdfasdfasdf',
                ordering: 1,
                parentItem: 208,
                subItemList: [],
                url: '/subcategories/59',
            },
        ],
        url: '/subcategories/59',
    },
    activeSubItemId: 208,
    setActiveSecondLevelItem: subItem => () => console.log(subItem),
    activeSubSubItemId: 208,
    setActiveThirdLevelItem: subSubItem => () => console.log(subSubItem),
    thirdLevelAnchorEl: null,
    onClickAddThirdLevelItemButton: subItem => event => console.log(event.currentTarget, subItem),
    onCloseAddThirdLevelItemButton: () => console.log('close'),
    onCategoryWithSubCategoryItemClick: () => console.log('click'),
    onCategoryWithGoodsItemClick: () => console.log('click'),
    onFilterItemClick: () => console.log('click'),
    onDeleteMegaMenuItem: id => () => console.log('click', id),
    onChangeMegaMenuItem:
        ({ id, url }) =>
        () =>
            console.log(id, url),
}
