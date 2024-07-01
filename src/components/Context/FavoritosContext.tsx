import React, { createContext, useContext, useMemo, useState } from "react";
import { DB } from "../../interfaces/db";

type FavoritosContextProps = {
    children: JSX.Element | JSX.Element[];
}

interface FavoritosContextType{
    favoritos: Array<string|number>;
}

interface FavoritoContextStateType extends FavoritosContextType{
    setFavoritos:React.Dispatch<React.SetStateAction<Array<string|number>>>;
}

// export const FavoritosContext = createContext<FavoritoContextStateType | undefined>(undefined)
// FavoritosContext.displayName = 'Favoritos'


// ##############################################
interface CardsProps{
    videos:Array<DB>
  }

interface VideosContextStateType extends CardsProps{
    setVideos:React.Dispatch<React.SetStateAction<Array<DB>>>;
}

interface VarContextType extends FavoritoContextStateType, VideosContextStateType{}

// export const VideosContext = createContext<VideosContextStateType|Array<DB>>([])
// VideosContext.displayName = 'Videos'
// ##############################################

export const VarContext = createContext<VarContextType|undefined>(undefined)


export function VarProvider ({ children }:FavoritosContextProps) {
    
    const [favoritos, setFavoritos] = useState<Array<string|number>>([]);
    const [videos, setVideos] = useState<Array<DB>>([])

    useMemo(()=>{
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
        .then(res=>res.json())
        .then(data=>setVideos(data))
    },[])

    return(
        < VarContext.Provider value={ {favoritos, setFavoritos, videos, setVideos }}>
        { children }
    </VarContext.Provider >
    )
}

export const useContextFavoritos = () =>{

    const context = useContext(VarContext)

    if (!context) {
        throw new Error('useContextFavoritos must be used within a FavoritosProvider');
    }

    const { favoritos, setFavoritos, videos, setVideos } = context;

    function adcionarFavorito(novoFavorito:number|string) {
        const index = favoritos.findIndex((element: number|string) => element === novoFavorito) 
        setFavoritos( (favoritoAnterior: Array<string|number>) => {
            return (
                index === -1 ? 
                [...favoritoAnterior, novoFavorito] : 
                favoritoAnterior.filter((element:number|string)=> element!=novoFavorito)
            )
        })
    }

    return{
        favoritos,
        setFavoritos,
        adcionarFavorito,
        videos,
        setVideos
    }
}