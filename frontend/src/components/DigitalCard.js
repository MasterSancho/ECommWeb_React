import { Row, Image } from 'react-bootstrap';

const DigitalCard = ({ digitalcard }) => {
 return (
  <>
   <Row className='align-items-center'>
    <Image className='w-100' src={digitalcard.showcase} alt='showcase' fluid />
   </Row>
   <h2>{digitalcard.name}</h2>
  </>
 );
};

export default DigitalCard;
