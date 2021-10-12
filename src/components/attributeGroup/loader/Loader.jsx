import React from 'react'
import styled, { keyframes } from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }

`

const Rotator = styled.div`
    position: fixed;
    z-index: 1001;
    height: 100px;
    width: 100px;
    margin-left: -50px;
    margin-top: -50px;
    background-color: white;
    top: 50%;
    left: 50%;
    animation: ${rotate} 1s infinite;
    text-align: center;
    line-height: 100px;
`

const Loader = () => {
    return (
        <Overlay>
            <Rotator>Loading...</Rotator>
        </Overlay>
    )
}

export default Loader
