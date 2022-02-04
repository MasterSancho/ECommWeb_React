import { useEffect } from 'react';

import { Card } from 'react-bootstrap';

const ProfileCard = ({ digitalcard }) => {
 useEffect(() => {
  console.log(digitalcard);
 }, []);

 return (
  <Card className='my-3 p-3 rounded'>
   <Card.Img src={digitalcard.image} />

   <Card.Body>
    <Card.Title as='div'>
     <strong>{digitalcard.name}</strong>
    </Card.Title>
   </Card.Body>

   {/* <Container className='text-center'>
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
   </Container> */}
  </Card>
 );
};

export default ProfileCard;
