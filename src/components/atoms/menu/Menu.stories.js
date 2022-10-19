import React from 'react'
import Menu from './Menu'
import MenuItem from '../inputs/menuItem/MenuItem'

export default {
    title: 'atoms/Menu',
    component: Menu,
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
        <>
            <div
                style={{
                    backgroundColor: 'yellow',
                    padding: '10px',
                    borderRadius: '10px',
                    display: 'inline-block',
                }}
                onClick={handleClick}
            >
                click here to see MENU
            </div>
            <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} />
        </>
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    id: 0,
    anchorEl: null,
    open: false,
    onClose: () => console.log('close menu'),
    children: [<MenuItem key={0}>Profile</MenuItem>, <MenuItem key={1}>My account</MenuItem>, <MenuItem key={2}>Logout</MenuItem>],
}
