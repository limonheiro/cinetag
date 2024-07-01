import React from 'react'
import styled from 'styled-components'

const RodapeStyled = styled.footer`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    p{
        font-size: 18px;
        font-weight: 400;
    }
`

export const Rodape = () => {
  return (
    <RodapeStyled className='black'>
        <p>Desenvolvido pela Alura</p>
    </RodapeStyled>
  )
}
