import React from 'react'
import icons from './icons.svg'
import styled, {css} from 'styled-components'

const SvgIcon = styled.svg`
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: #444;
  ${props => props.size && css`
    height: ${props.size}px;
    width: ${props.size}px;
  `}
`


const Icon = ({icon, size}) => {
    return (
        <SvgIcon size={size}>
            <use xlinkHref={icons + icon}></use>
        </SvgIcon>
    )
}


export default Icon