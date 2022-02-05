import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { cardDigital } from '../actions/digitalCardActions';
import DigitalCard from '../components/DigitalCard';

const HomeScreen = () => {
 const dispatch = useDispatch();

 const digitalCard = useSelector((state) => state.digitalCard);
 const { loading, error, digitalcards } = digitalCard;

 useEffect(() => {
  dispatch(cardDigital());
 }, [dispatch]);

 return (
  <>
   {loading ? (
    <Loader />
   ) : error ? (
    <Message variant='danger'>{error}</Message>
   ) : (
    <>
     <Row>
      {digitalcards.map((digitalcard) => (
       <Col key={digitalcard._id}>
        <DigitalCard digitalcard={digitalcard} />
       </Col>
      ))}
     </Row>
    </>
   )}
  </>
 );
};

export default HomeScreen;
