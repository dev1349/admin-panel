import styled from 'styled-components'

export const ColTmp = ({children}) => {
    return (
        <ColTmpStyle>{children}</ColTmpStyle>
    )
}

const ColTmpStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  * {
    margin: 0.5rem;
    width: 100%;
    height: 10rem;
  }
`