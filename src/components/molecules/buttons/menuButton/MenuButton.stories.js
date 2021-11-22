import React from 'react'
import MenuButton from './MenuButton'
import ImportExportIcon from '../../../atoms/icons/importExportIcon/ImportExportIcon'

export default {
    title: 'molecules/buttons/MenuButton',
    component: MenuButton,
}

const Template = args => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <MenuButton
            {...args}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
        />
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    children: <ImportExportIcon />,
    id: 0,
    anchorEl: null,
    handleClick: () => console.log('menu click'),
    handleClose: () => console.log('menu close'),
    menuItems: [
        {
            id: 0,
            title: 'Основное',
            link: '#',
        },
        {
            id: 1,
            title: 'Товары',
            link: '#',
        },
        {
            id: 2,
            title: 'Магазины',
            link: '#',
        },
    ],
}
