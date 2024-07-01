
import { Titulo } from '../../components/Titulo'
import { Cards } from '../../components/Cards'
import { useContextFavoritos } from '../../components/Context/FavoritosContext'

export const Inicio = () => {
  const {videos} = useContextFavoritos()
  return (
    <>
    <Titulo>
      Um lugar para guardar seus vídeos e filmes!
    </Titulo>
    <Cards videos={videos}/>
    </>
)
}
