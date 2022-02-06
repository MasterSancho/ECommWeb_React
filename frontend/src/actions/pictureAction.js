import axios from 'axios';
import {
 PICTURE_LIST_REQUEST,
 PICTURE_LIST_SUCCESS,
 PICTURE_LIST_FAIL,
} from '../constants/pictureConstants';

export const listPictures = () => async (dispatch) => {
 try {
  dispatch({ type: PICTURE_LIST_REQUEST });

  const { data } = await axios.get('/api/pictures/');

  dispatch({
   type: PICTURE_LIST_SUCCESS,
   payload: data,
  });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;

  dispatch({
   type: PICTURE_LIST_FAIL,
   payload: message,
  });
 }
};
