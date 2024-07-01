import { NavLink } from 'react-router-dom'
import logo from '../../../public/imagens/logo.png'
import { CabecalhoLink } from '../CabecalhoLink'
import styled from 'styled-components'

const CabecalhoEstilo = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 20rem;
    text-decoration: none;

`

const CabecalhoLinksEstilo = styled.div`
    font-size: 18px;
    font-weight: 400;
    display: flex;
    gap: 05rem;
`

export const Cabecalho = () => {
  return (
    <header >
        <CabecalhoEstilo className='black'>
            <NavLink to='./'>
                    <img src={logo} alt='logo da cinePlay'/>
            </NavLink>
            <CabecalhoLinksEstilo>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url='./favoritos'>
                    Favoritos
                </CabecalhoLink>
            </CabecalhoLinksEstilo>
        </CabecalhoEstilo>
    </header>
  )     
}
