import { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listPictures } from '../actions/pictureAction';

const PicturesCarousel = () => {
 const dispatch = useDispatch();

 const pictureList = useSelector((state) => state.pictureList);
 const { loading, error, pictures } = pictureList;

 useEffect(() => {
  dispatch(listPictures());
 }, [dispatch]);

 return loading ? (
  <Loader />
 ) : error ? (
  <Message variant='danger'>{error}</Message>
 ) : (
  <Carousel pause='hover' className='bg-dark'>
   {pictures.map((picture) => (
    <Carousel.Item key={picture._id}>
     <Image src={picture.image} alt={picture.name} fluid />
    </Carousel.Item>
   ))}
  </Carousel>
 );
};

export default PicturesCarousel;
