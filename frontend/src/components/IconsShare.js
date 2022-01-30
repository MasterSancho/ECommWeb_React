import { Container, Row, Button, Col, Card } from 'react-bootstrap';

const IconsShare = ({ color }) => {
 return (
  <div>
   <Container>
    <Row>
     <Button type='button' className='rounded-pill bg-danger m-auto w-75 mb-5'>
      <i className='fas fa-user-plus py-2' style={{ color }}></i>{' '}
      <span>שמור אותי באנשי הקשר</span>
     </Button>
    </Row>

    <Card.Title className='text-center mb-3'>Share Links</Card.Title>

    <Row className='g-4'>
     <Col className='text-center'>
      <Card.Link href='mailto:?subject=%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%99%D7%95%D7%A2%D7%A5%20%D7%94%D7%A0%D7%93%D7%9C%22%D7%9F%20%D7%94%D7%90%D7%99%D7%A9%D7%99%20%D7%A9%D7%9C%D7%9A&amp;body=https%3A%2F%2Fremax.your-app.website%2Farieli-shai%2F'>
       <i className='far fa-envelope fa-3x' style={{ color }}></i>
      </Card.Link>
     </Col>

     <Col className='text-center'>
      <Card.Link href='sms://?&amp;body=%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%99%D7%95%D7%A2%D7%A5%20%D7%94%D7%A0%D7%93%D7%9C%22%D7%9F%20%D7%94%D7%90%D7%99%D7%A9%D7%99%20%D7%A9%D7%9C%D7%9A%20https%3A%2F%2Fremax.your-app.website%2Farieli-shai%2F'>
       <i className='fas fa-sms fa-3x' style={{ color }}></i>
      </Card.Link>
     </Col>

     <Col className='text-center'>
      <Card.Link href='https://api.whatsapp.com/send?text=*%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%99%D7%95%D7%A2%D7%A5%20%D7%94%D7%A0%D7%93%D7%9C%22%D7%9F%20%D7%94%D7%90%D7%99%D7%A9%D7%99%20%D7%A9%D7%9C%D7%9A*%20https%3A%2F%2Fremax.your-app.website%2Farieli-shai%2F'>
       <i className='fab fa-whatsapp fa-3x' style={{ color }}></i>
      </Card.Link>
     </Col>

     <Col className='text-center'>
      <Card.Link href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fremax.your-app.website%2Farieli-shai%2F'>
       <i className='fab fa-facebook-f fa-3x' style={{ color }}></i>
      </Card.Link>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

IconsShare.defaultProps = {
 color: '#b30000',
};

export default IconsShare;
