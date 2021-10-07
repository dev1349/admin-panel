import styled from 'styled-components'

//todo: удалить после перехода на atomic design
export const SectionA = ({text, color}) => {
    return (
        <SectionAStyle color={color}>{text}</SectionAStyle>
    )
}

const SectionAStyle = styled.section`
  display: flex;
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
`