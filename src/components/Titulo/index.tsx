
import styled from 'styled-components'

type TituloProps = {
  children: string
}

const TituloStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px;
  h1{
    font-size: 32px;
    font-weight: 500;
  }
`

export const Titulo = ({ children }: TituloProps) => {
  return (
    <TituloStyled>
      <h1>
        {children}
      </h1>
    </TituloStyled>
  )
}
