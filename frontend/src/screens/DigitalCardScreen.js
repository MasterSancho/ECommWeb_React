import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { cardDigitalDetails } from '../actions/digitalCardActions';

const DigitalCardScreen = () => {
 const params = useParams();
 const dispatch = useDispatch();

 const digitalCardDetails = useSelector((state) => state.digitalCardDetails);
 const { loading, error, digitalcard } = digitalCardDetails;

 useEffect(() => {
  dispatch(cardDigitalDetails(params.id));
 }, [dispatch, params]);

 return (
  <>
   <Link className='btn btn-light my-3' to='/'>
    Go Back
   </Link>
   {loading ? (
    <Loader />
   ) : error ? (
    <Message variant='danger'>{error}</Message>
   ) : (
    <>
     <Meta title={digitalcard.name} />

     <Row>
      <Col>
       <Image src={digitalcard.showcase} alt={digitalcard.name} fluid />
       <ListGroup variant='flush'>
        <ListGroup.Item>
         <h3>{digitalcard.name}</h3>
        </ListGroup.Item>

        <ListGroup.Item>Price: ${digitalcard.slogan}</ListGroup.Item>
        <ListGroup.Item>Description: {digitalcard.about}</ListGroup.Item>
       </ListGroup>
      </Col>
     </Row>
    </>
   )}
  </>
 );
};

export default DigitalCardScreen;
