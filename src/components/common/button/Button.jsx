import React from 'react'
import styled, {css} from 'styled-components'
import Icon from '../icon/Icon'


const StyledButton = styled.button`
  padding: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    border: 1px solid lightgray;
  }
  ${props => props.padding && css`
    padding: ${props.padding}px;
  `}
  ${props => props.bordered && css`
    border: 1px solid lightgray;
  `}
  ${props => props.color && css`
    background-color: ${props.color};
  `}
`

const Title = styled.div`
  padding: 0 5px;
`


const Button = ({icon, size, padding, onClick, title, bordered, color, disabled, autofocus}) => {

    return (
        <StyledButton
            padding={padding}
            onClick={onClick}
            bordered={bordered}
            color={color}
            disabled={disabled}
            autoFocus={autofocus}
        >
            {icon && <Icon icon={icon} size={size}/>}
            {title && <Title>{title}</Title>}

        </StyledButton>
    )
}


export default Button