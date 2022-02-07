import {
 RECOMMEND_LIST_REQUEST,
 RECOMMEND_LIST_SUCCESS,
 RECOMMEND_LIST_FAIL,
} from '../constants/recommendConstants';

export const recommendListReducer = (state = { recommends: [] }, action) => {
 switch (action.type) {
  case RECOMMEND_LIST_REQUEST:
   return { loading: true, recommends: [] };
  case RECOMMEND_LIST_SUCCESS:
   return {
    loading: false,
    recommends: action.payload.recommends,
   };
  case RECOMMEND_LIST_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
