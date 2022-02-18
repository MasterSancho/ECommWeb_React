import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductsScreen from './screens/ProductsScreen';

const App = () => {
 return (
  <Router>
   <Header />
   <main>
    <Container>
     <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/admin/productlist' element={<ProductListScreen />} />
      <Route
       path='/admin/productlist/:pageNumber'
       element={<ProductListScreen />}
      />
      <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
      {/* <Route
       path='/search/:keyword/page/:pageNumber'
       element={<HomeScreen />}
      />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/' element={<HomeScreen />} /> */}

      <Route
       path='/products/search/:keyword/page/:pageNumber'
       element={<ProductsScreen />}
      />
      <Route path='/products/page/:pageNumber' element={<ProductsScreen />} />
      <Route path='/products/search/:keyword' element={<ProductsScreen />} />
      <Route path='/products/' element={<ProductsScreen />} />
      <Route path='/' element={<HomeScreen />} />
     </Routes>
    </Container>
   </main>
   <Footer />
  </Router>
 );
};

export default App;
