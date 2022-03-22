import React from 'react'
import Popover from './Popover'

export default {
    title: 'atoms/Popover',
    component: Popover,
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
                click here to see Popper
            </div>
            <Popover
                {...args}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                Some text in popper
            </Popover>
        </>
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
}
