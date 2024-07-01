import { Link } from 'react-router-dom'

type CabecalhoLinkProps = {
    children: string
    url:string
}


export const CabecalhoLink = ({children, url}:CabecalhoLinkProps):JSX.Element => {
  return (
    <Link to={url}>
        {children}
    </Link>
  )
}
