import styled from 'styled-components'
import iconeFavoritar from '/imagens/favoritar.png'
import iconeFavorito from '/imagens/favorite.png'
import { useContextFavoritos } from '../../Context/FavoritosContext'
import { Link } from 'react-router-dom'

const CardStyled = styled.div`
  text-decoration: none;
  color: #000;
  margin-top: .5rem;
  width: 282px;
  height: 541px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  h2{
    font-size: 18px;
    font-weight: 700;
  }
  :first-child{
    width: 100%;
  }

`

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  height: 100%;
  background: #e5e5e5;

`

const IconStyled = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

`

type CardProps = {
  id: string|number,
  titulo:string,
  link:string,
  capa:string,
}

export const Card = ({id, titulo, capa}:CardProps) => {

  const {favoritos, adcionarFavorito} = useContextFavoritos()
  
  

  return (
    <CardStyled key={id}>
      <Link to={`player/${id}`}>
      <img src={capa} alt={titulo} />
      </Link>
      <ContentStyled>
        <h2>{titulo}</h2>
        <IconStyled src={favoritos.includes(id) ? iconeFavorito : iconeFavoritar} alt='icone de favorito' onClick={()=>adcionarFavorito(id)}/>
      </ContentStyled>
    </CardStyled>
  )
}
