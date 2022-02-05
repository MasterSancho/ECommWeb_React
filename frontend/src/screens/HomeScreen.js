import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import { cardDigital } from '../actions/digitalCardActions';
import DigitalCard from '../components/DigitalCard';

const HomeScreen = () => {
 const params = useParams();
 const dispatch = useDispatch();

 const keyword = params.keyword;
 const pageNumber = params.pageNumber || 1;

 const productList = useSelector((state) => state.productList);
 const { loading, error, products, page, pages } = productList;

 const digitalCard = useSelector((state) => state.digitalCard);
 const {
  loading: loadingDigitalCard,
  error: errorDigitalCard,
  digitalcards,
 } = digitalCard;

 useEffect(() => {
  dispatch(listProducts(keyword, pageNumber));
  dispatch(cardDigital());
 }, [dispatch, keyword, pageNumber]);

 return (
  <>
   <Meta />

   {!keyword ? (
    <ProductCarousel />
   ) : (
    <Link to='/' className='btn btn-light'>
     Go Back
    </Link>
   )}

   <h1>Latest Products</h1>
   {loading ? (
    <Loader />
   ) : error ? (
    <Message variant='danger'>{error}</Message>
   ) : (
    <>
     <Row>
      {digitalcards.map((digitalcard) => (
       <Col key={digitalcard._id} sm={12} md={6} lg={4} xs={3}>
        <DigitalCard digitalcard={digitalcard} />
       </Col>
      ))}
     </Row>
     <Row>
      {products.map((product) => (
       <Col key={product._id} sm={12} md={6} lg={4} xs={3}>
        <Product product={product} />
       </Col>
      ))}
     </Row>

     <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </>
   )}
  </>
 );
};

export default HomeScreen;
