import axios from 'axios';
import {
 RECOMMEND_LIST_REQUEST,
 RECOMMEND_LIST_SUCCESS,
 RECOMMEND_LIST_FAIL,
} from '../constants/recommendConstants';

export const listRecommends = () => async (dispatch) => {
 try {
  dispatch({ type: RECOMMEND_LIST_REQUEST });

  const { data } = await axios.get('/api/recommends/');

  dispatch({
   type: RECOMMEND_LIST_SUCCESS,
   payload: data,
  });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;

  dispatch({
   type: RECOMMEND_LIST_FAIL,
   payload: message,
  });
 }
};
