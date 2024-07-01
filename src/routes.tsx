import { Favoritos } from './components/Favoritos'
import { Inicio } from './pages/Inicio'
import { Route, Routes } from 'react-router-dom'
import { Player } from './components/Player'
import { NaoEncontrada } from './pages/NaoEncontrada'
import { PageBase } from './pages/PageBase'

export const AppRoutes = () => {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<PageBase/>}>
          <Route index element = {< Inicio />}/>
          < Route path = 'favoritos' element = {< Favoritos />}/>
          <Route path='player/:id' element={<Player/>}/>
          <Route path='*' element={<NaoEncontrada/>}/>
        </Route>
      </Routes>
    </>
  )
}
