import axios from 'axios';
import {
 DIGITAL_CARD_REQUEST,
 DIGITAL_CARD_SUCCESS,
 DIGITAL_CARD_FAIL,
} from '../constants/digitalCardConstants';

export const cardDigitalDetails = () => async (dispatch) => {
 try {
  dispatch({ type: DIGITAL_CARD_REQUEST });

  const { data } = await axios.get('/api/digitalcards/');

  dispatch({
   type: DIGITAL_CARD_SUCCESS,
   payload: data,
  });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  if (message === 'Not authorized, token failed') {
   dispatch(logout());
  }
  dispatch({
   type: DIGITAL_CARD_FAIL,
   payload: message,
  });
 }
};
