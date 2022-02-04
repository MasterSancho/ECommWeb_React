import {
 DIGITAL_CARD_REQUEST,
 DIGITAL_CARD_SUCCESS,
 DIGITAL_CARD_FAIL,
} from '../constants/digitalCardConstants';

export const digitalCardReducer = (state = { digitalcards: {} }, action) => {
 switch (action.type) {
  case DIGITAL_CARD_REQUEST:
   return { loading: true, digitalcards: {} };
  case DIGITAL_CARD_SUCCESS:
   return {
    loading: false,
    products: action.payload,
   };
  case DIGITAL_CARD_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
