import React from 'react'
import FromToFloatFilterPopper from './FromToFloatFilterPopper'

export default {
    title: 'molecules/FromToFloatFilterPopper',
    component: FromToFloatFilterPopper,
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
            <FromToFloatFilterPopper
                {...args}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                Some text in popper
            </FromToFloatFilterPopper>
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
