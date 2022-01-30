import { Container, Carousel, Image } from 'react-bootstrap';
import pictures from '../pictures';

const PicturesCarousel = () => {
 return (
  <Container>
   <Carousel pause='hover' className='bg-dark'>
    {pictures.map((picture) => (
     <Carousel.Item key={picture._id}>
      <Image
       className='d-block w-100 '
       src={picture.image}
       alt={picture.name}
       fluid
      />
     </Carousel.Item>
    ))}
   </Carousel>
  </Container>
 );
};
export default PicturesCarousel;
