import Showcase from '../components/Showcase';
import ProfileCard from '../components/ProfileCard';
import IconsLinks from '../components/IconsLinks';
import IconsShare from '../components/IconsShare';
import Divider from '../components/Divider';
import PicturesCarousel from '../components/PicturesCarousel';
import About from '../components/About';
import RecommendsCarousel from '../components/RecommendsCarousel';

const DigitalCardScreen = () => {
 return (
  <>
   <Showcase />
   <ProfileCard />
   <IconsLinks />
   <IconsShare />
   <Divider />
   <PicturesCarousel />
   <Divider />
   <About />
   <Divider />
   <RecommendsCarousel />
   <Divider />
  </>
 );
};

export default DigitalCardScreen;
