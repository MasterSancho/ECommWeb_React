import { Container, Row, Image } from 'react-bootstrap';

const ProfileCard = () => {
 return (
  <div>
   <Container className='text-center'>
    <Row>
     <Image
      src='images/08.09.20_Arieli_Shay_029-min.jpg'
      className='rounded-circle w-50 m-auto my-3'
      alt=''
      fluid
     />

     <h2 className='text-white mb-3'>שי אריאלי</h2>

     <p className='text-white'>יועץ הנדל"ן האישי שלך</p>
    </Row>
   </Container>
  </div>
 );
};

export default ProfileCard;
