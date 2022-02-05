import { Row, Image } from 'react-bootstrap';

const Showcase = ({ digitalcard }) => {
 return (
  <>
   <Row className='align-items-center'>
    <Image className='w-100' src={digitalcard.showcase} alt='showcase' fluid />
   </Row>
  </>
 );
};

export default Showcase;
