import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';

const PicturesCarousel = () => {
 const digitalCard = useSelector((state) => state.digitalCard);
 const { loading, error, digitalcards } = digitalCard;

 return loading ? (
  <Loader />
 ) : error ? (
  <Message variant='danger'>{error}</Message>
 ) : (
  <Carousel pause='hover' className='bg-dark'>
   {digitalcards.picture_image.map((digitalcard) => (
    <Carousel.Item key={digitalcard._id}>
     <Image src={digitalcard.picture_image} alt='' fluid />
    </Carousel.Item>
   ))}
  </Carousel>
 );
};

export default PicturesCarousel;
