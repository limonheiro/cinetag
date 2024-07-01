import { Cards } from '../Cards'
import { Titulo } from '../Titulo'
import { useContextFavoritos } from '../Context/FavoritosContext'

export const Favoritos = () => {
  
  const {videos, favoritos} = useContextFavoritos()

  const videosFavoritos = videos.filter(video => favoritos.includes(video.id))

  return (
    <>
    <Titulo>
     Meus Favoritos
    </Titulo>
      <Cards videos={videosFavoritos}/>
    </>
  )
}
