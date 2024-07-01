import styled from 'styled-components'

type BannerProps = {
    image:string
}

const BannerStyled = styled.div<{image: string}>`
    background-image: ${props => props.image && `url('/imagens/banner-${props.image}.png')`};
    height:347px;
    background-size: cover;
    
`

export const Banner = ({image}:BannerProps) => {
  return (
    <BannerStyled image={image}>

    </BannerStyled>
  )
}
