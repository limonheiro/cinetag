import { Titulo } from '../Titulo';
import { DB } from '../../interfaces/db';
// import videos from '../../json/db.json'
import { useParams } from 'react-router-dom';
import { NaoEncontrada } from '../../pages/NaoEncontrada';
import {  useContextFavoritos } from '../Context/FavoritosContext';



export const Player = () => {
    const context = useContextFavoritos()
    const {videos}= context
    
    const id = useParams().id;
    const video = videos.find((video:DB) => {
        console.log(video.id)
        return video.id === Number(id)
    })
    if(!video){
        return <NaoEncontrada/>
    }
  return (
    <>
        <Titulo>Player</Titulo>
            <iframe 
            width="560" 
            height="315" 
            src={video.link}
            title={video.titulo} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </>
)
}
