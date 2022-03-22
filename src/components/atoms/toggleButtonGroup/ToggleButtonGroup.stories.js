import React, { useState } from 'react'
import ToggleButtonGroup from './ToggleButtonGroup'
import ToggleButton from '../toggleButton/ToggleButton'

export default {
    title: 'atoms/ToggleButtonGroup',
    component: ToggleButtonGroup,
}

const Template = args => {
    const [value, setValue] = useState(25)
    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="text alignment"
            {...args}
        />
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <ToggleButton key={1} value={25} aria-label="25" size={'small'}>
            25
        </ToggleButton>,
        <ToggleButton key={2} value={50} aria-label="50" size={'small'}>
            50
        </ToggleButton>,
        <ToggleButton key={3} value={100} aria-label="100" size={'small'}>
            100
        </ToggleButton>,
    ],
}
