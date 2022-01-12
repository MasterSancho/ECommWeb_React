import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
 return (
  <Router>
   <Header />
   <main className='py-3'>
    <Container>
     <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/' element={<HomeScreen />} />
     </Routes>
    </Container>
   </main>
   <Footer />
  </Router>
 );
};

export default App;
