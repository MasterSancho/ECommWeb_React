import { Container, Row, Col, Card } from 'react-bootstrap';

const IconsLinks = ({ color }) => {
 return (
  <div className='logo'>
   <Container className='py-5'>
    <Row className='g-4'>
     <Col className='text-center'>
      <Card.Link href='https://waze.com/ul/hsv8z4c0xq'>
       <i className='fab fa-waze fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>נווט</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='mailto:arieli.shai@remax.co.il'>
       <i className='far fa-envelope fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>מייל</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='https://api.whatsapp.com/send?phone=9720547537573'>
       <i className='fab fa-whatsapp fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>וואטסאפ</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='tel:0547537573'>
       <i className='fas fa-phone fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>חייג אליי</Card.Text>
     </Col>
    </Row>

    <Row className='g-4 py-4'>
     <Col className='text-center'>
      <Card.Link href='/atar_ezerGovmap'>
       <i className='fab fa-chrome fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>אתרי עזר</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/maagar_nehasim'>
       <i className='fas fa-home fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>מאגר נכסים</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/madlan'>
       <i className='fas fa-house-damage fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>מדלן</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/facebook'>
       <i className='fab fa-facebook-f fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>פייסבוק</Card.Text>
     </Col>
    </Row>

    <Row className='g-4'>
     <Col className='text-center'>
      <Card.Link href='/atar_amadrihLeMehira'>
       <i className='far fa-list-alt fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>המדריך למכירת נכס</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/atar_daNnehita'>
       <i className='fab fa-chrome fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>דף נחיתה</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/atar_minAtonim'>
       <i className='fab fa-chrome fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>מן העיתונות</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='/atar_mektsuim'>
       <i className='fab fa-black-tie fa-3x' style={{ color }}></i>
      </Card.Link>
      <Card.Text>אתר המקצוענים</Card.Text>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

IconsLinks.defaultProps = {
 color: '#b30000',
};

export default IconsLinks;
