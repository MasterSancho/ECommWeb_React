import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DigitalCard = ({ digitalcard }) => {
 return (
  <div>
   <h2>{digitalcard.name}</h2>
  </div>
 );
};

export default DigitalCard;
