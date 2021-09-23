import React from 'react'
import styled, {css} from 'styled-components'
import Button from '../button/Button'


const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
`

const Window = styled.div`
  color: black;
  position: fixed;
  min-width: 250px;
  padding: 25px 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  text-align: center;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 20px;
  padding: 10px;
  ${props => props.success && css`
    color: green;
  `}
  ${props => props.error && css`
    color: red;
  `}
`



const Modal = ({message, success, error, action}) => {



    return (
        <Overlay onClick={action}>
            <Window>
                <H1
                    success={success}
                    error={error}
                >
                    {message}
                </H1>
                <Button
                    padding={10}
                    onClick={action}
                    title={'Ok'}
                    bordered={true}
                    autofocus
                />
            </Window>
        </Overlay>
    )
}


export default Modal