import { Row, Image } from 'react-bootstrap';
import IconsLinks from './IconsLinks';
import IconsShare from './IconsShare';
import Divider from './Divider';
import About from './About';
import PicturesCarousel from './PicturesCarousel';
import RecommendsCarousel from './RecommendsCarousel';

const DigitalCard = ({ digitalcard }) => {
 return (
  <>
   <Row className='align-items-center text-center'>
    <Image className='w-100' src={digitalcard.showcase} alt='showcase' fluid />

    <Image
     src={digitalcard.profile_image}
     className='rounded-circle w-50 m-auto my-3'
     alt=''
     fluid
    />

    <h2 className='text-white mb-3'>{digitalcard.name}</h2>

    <p className='text-white'>{digitalcard.slogan}</p>

    <IconsLinks />
    <IconsShare />
    <Divider />
    <PicturesCarousel />
    <Divider />
    <About />
    <Divider />
    <RecommendsCarousel />
    <Divider />
   </Row>
  </>
 );
};

export default DigitalCard;
