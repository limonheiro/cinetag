import { Banner } from '../../components/Banner'
import { Cabecalho } from '../../components/Cabecalho'
import { Container } from '../../components/Container'
import { VarProvider } from '../../components/Context/FavoritosContext'
import { GlobalStyled } from '../../components/GlobalStyled'
import { Rodape } from '../../components/Rodape'
import { LocationPathnameReturn } from '../../funcoes/location'
import { Outlet } from 'react-router-dom'

export const PageBase = () => {
    const pathname = LocationPathnameReturn()
    return (
    <>
    <GlobalStyled/>
    <Cabecalho/>
    <Banner image={pathname ? pathname : 'home'} /> 
    <VarProvider>
    <Container column>
        <Outlet/>
    </Container>
    </VarProvider>
    <Rodape/>

    </>
  )
}
