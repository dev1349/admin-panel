import React, { useState } from 'react'
import { aa, bb } from './allExports'
import { useDispatch } from 'react-redux'

console.log(aa, bb)

const TestComponent02 = ({ name, surname, lastName }) => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    dispatch({
        type: 'one',
    })

    console.log(name, surname, lastName, 1)
    console.log(count)

    setCount(1)
    console.log(count)
    return <div>Some text</div>
}

export default TestComponent02
