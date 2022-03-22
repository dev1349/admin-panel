import React from 'react'
import CheckboxFilterPopper from './CheckboxFilterPopper'

export default {
    title: 'molecules/CheckboxFilterPopper',
    component: CheckboxFilterPopper,
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
            <CheckboxFilterPopper
                {...args}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                Some text in popper
            </CheckboxFilterPopper>
        </>
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    id: 'order',
    onClose: () => console.log('close popper'),
    filter: null,
    onApply: () => console.log('apply'),
    checkItems: [
        {
            id: 'subscribed',
            title: 'Подписан',
        },
        {
            id: 'notSubscribed',
            title: 'Не подписан',
        },
    ],
}
