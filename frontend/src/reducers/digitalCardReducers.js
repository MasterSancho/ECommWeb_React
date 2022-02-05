import {
 DIGITAL_CARD_REQUEST,
 DIGITAL_CARD_SUCCESS,
 DIGITAL_CARD_FAIL,
 DIGITAL_CARD_DETAILS_REQUEST,
 DIGITAL_CARD_DETAILS_SUCCESS,
 DIGITAL_CARD_DETAILS_FAIL,
} from '../constants/digitalCardConstants';

export const digitalCardReducer = (state = { digitalcards: [] }, action) => {
 switch (action.type) {
  case DIGITAL_CARD_REQUEST:
   return { loading: true, digitalcards: [] };
  case DIGITAL_CARD_SUCCESS:
   return {
    loading: false,
    digitalcards: action.payload.digitalcards,
   };
  case DIGITAL_CARD_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const digitalCardDetailsReducer = (
 state = { digitalcard: {} },
 action
) => {
 switch (action.type) {
  case DIGITAL_CARD_DETAILS_REQUEST:
   return { loading: true, digitalcard: {} };
  case DIGITAL_CARD_DETAILS_SUCCESS:
   return { loading: false, digitalcard: action.payload };
  case DIGITAL_CARD_DETAILS_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
