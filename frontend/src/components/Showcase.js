import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Image } from 'react-bootstrap';

const Showcase = ({ digitalcard }) => {
 useEffect(() => {
  console.log(digitalcard);
 }, []);

 return (
  <>
   <Row className='align-items-center'>
    <Image
     className='w-100'
     src='images/08.09.20_Arieli_Shay_030_png-min.png'
     alt='showcase'
     fluid
    />
   </Row>
  </>
 );
};

export default Showcase;
