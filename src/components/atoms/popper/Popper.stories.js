import React from 'react'
import Popper from './Popper'

export default {
    title: 'atoms/Popper',
    component: Popper,
}

const Template = args => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = event => {
        if (anchorEl) {
            setAnchorEl(null)
            return
        }
        setAnchorEl(event.currentTarget)
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
            <Popper {...args} anchorEl={anchorEl} open={Boolean(anchorEl)}>
                Some text in popper
            </Popper>
        </>
    )
}

export const Example1 = Template.bind({})
Example1.args = {}
