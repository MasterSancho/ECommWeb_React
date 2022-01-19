import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SearchBox = () => {
 const navigate = useNavigate();

 const [keyword, setKeyword] = useState('');

 const submitHandler = (e) => {
  e.preventDefault();
  if (keyword.trim()) {
   navigate(`/search/${keyword}`);
  } else {
   navigate('/');
  }
 };

 return (
  <Form className='d-flex ms-auto' onSubmit={submitHandler}>
   <Form.Control
    type='search'
    name='q'
    placeholder='Search Products...'
    onChange={(e) => setKeyword(e.target.value)}
    className='mr-sm-2 ml-sm-5'
    aria-label='Search'
   />

   <Button type='submit' variant='outline-success' className='p-2 '>
    Search
   </Button>
  </Form>
 );
};

export default SearchBox;
