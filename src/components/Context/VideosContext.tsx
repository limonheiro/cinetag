// https://my-json-server.typicode.com/monicahillman/cinetag-api

import { DB } from "../../interfaces/db";
import { createContext, useMemo, useState } from "react";

type VideoContextProps = {
    children: JSX.Element | JSX.Element[];
}

interface CardsProps{
    videos:Array<DB>
  }

interface VideosContextStateType extends CardsProps{
    setVideos:React.Dispatch<React.SetStateAction<Array<DB>>>;
}

export const VideosContext = createContext<VideosContextStateType|Array<DB>>([])
VideosContext.displayName = 'Videos'

export function VideosProvider ({ children }:VideoContextProps) {

    const [videos, setVideos] = useState<Array<DB>>([])

    useMemo(()=>{
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
        .then(res=>res.json())
        .then(data=>setVideos(data))
    },[])

    return(
        <VideosContext.Provider value={{videos, setVideos}}>
            {children}
        </VideosContext.Provider>
    )

}
