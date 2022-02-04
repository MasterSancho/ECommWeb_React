import axios from 'axios';
import {
 DIGITAL_CARD_REQUEST,
 DIGITAL_CARD_SUCCESS,
 DIGITAL_CARD_FAIL,
 DIGITAL_CARD_DETAILS_REQUEST,
 DIGITAL_CARD_DETAILS_SUCCESS,
 DIGITAL_CARD_DETAILS_FAIL,
} from '../constants/digitalCardConstants';

export const cardDigital = () => async (dispatch) => {
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

  dispatch({
   type: DIGITAL_CARD_FAIL,
   payload: message,
  });
 }
};

export const cardDigitalDetails = (id) => async (dispatch) => {
 try {
  dispatch({ type: DIGITAL_CARD_DETAILS_REQUEST });

  const { data } = await axios.get(`/api/digitalcards/${id}`);

  dispatch({
   type: DIGITAL_CARD_DETAILS_SUCCESS,
   payload: data,
  });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  dispatch({
   type: DIGITAL_CARD_DETAILS_FAIL,
   payload: message,
  });
 }
};
