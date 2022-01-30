import { Container, Row, Col } from 'react-bootstrap';

const Divider = () => {
 return (
  <Container className='py-5'>
   <Row>
    <Col xs={4} sm={4} md={4}>
     <hr />
    </Col>

    <Col xs={4} sm={4} md={4}>
     <h2 className='text-danger text-center'>Re/Max</h2>
    </Col>

    <Col xs={4} sm={4} md={4}>
     <hr />
    </Col>
   </Row>
  </Container>
 );
};

export default Divider;
