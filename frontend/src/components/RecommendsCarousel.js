import { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listRecommends } from '../actions/recommendAction';

const RecommendsCarousel = () => {
 const dispatch = useDispatch();

 const recommendList = useSelector((state) => state.recommendList);
 const { loading, error, recommends } = recommendList;

 useEffect(() => {
  dispatch(listRecommends());
 }, [dispatch]);

 return loading ? (
  <Loader />
 ) : error ? (
  <Message variant='danger'>{error}</Message>
 ) : (
  <Carousel pause='hover' className='bg-dark'>
   {recommends.map((recommend) => (
    <Carousel.Item key={recommend._id}>
     <Image src={recommend.image} alt={recommend.name} fluid />
    </Carousel.Item>
   ))}
  </Carousel>
 );
};
export default RecommendsCarousel;
