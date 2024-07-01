import { Card } from './Card/index';
import { Container } from '../Container'; 
import { DB } from '../../interfaces/db';

interface CardsProps{
  videos:Array<DB>
}

export const Cards = ({videos}:CardsProps) => {
  return (
      <Container column={false}>
        {videos.map((video:DB) => <Card {...video} key={video.id} />)}
      </Container>
  )
}
