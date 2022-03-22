import React from 'react'
import FromToIntegerFilterPopper from './FromToIntegerFilterPopper'

export default {
    title: 'molecules/FromToIntegerFilterPopper',
    component: FromToIntegerFilterPopper,
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
            <FromToIntegerFilterPopper
                {...args}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                Some text in popper
            </FromToIntegerFilterPopper>
        </>
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    id: 'order',
    onClose: () => console.log('close popper'),
    filter: null,
    onApply: () => console.log('apply'),
}
