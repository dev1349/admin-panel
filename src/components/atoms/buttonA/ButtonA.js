import styled from 'styled-components'
import {Button} from '@mui/material'

//todo: удалить после перехода на atomic design
export const ButtonA = (props) => {
    return (
        <ButtonAStyle {...props}>{props.children}</ButtonAStyle>
    )
}

const ButtonAStyle = styled(Button)`
  color: ${props => props.tColor};
  background-color: ${props => props.bColor};
  height: 3rem;
  width: 8rem;
`