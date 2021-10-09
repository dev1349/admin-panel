import React from 'react'
import styled from 'styled-components'
import Icon from './icon/Icon'


const StyledButton = styled.button`
  padding: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: white;
  
  &:hover{
    background-color: lightgrey;
  }
`

const Title = styled.div`
  padding: 0 5px;
`


const Button = ({icon, onClick, title, disabled, autofocus}) => {

    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            autoFocus={autofocus}
        >

            {icon && <Icon icon={icon}/>}
            {title && <Title>{title}</Title>}

        </StyledButton>
    )
}


export default Button