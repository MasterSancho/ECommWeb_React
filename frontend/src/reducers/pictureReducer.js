import {
 PICTURE_LIST_REQUEST,
 PICTURE_LIST_SUCCESS,
 PICTURE_LIST_FAIL,
} from '../constants/pictureConstants';

export const pictureListReducer = (state = { pictures: [] }, action) => {
 switch (action.type) {
  case PICTURE_LIST_REQUEST:
   return { loading: true, pictures: [] };
  case PICTURE_LIST_SUCCESS:
   return {
    loading: false,
    pictures: action.payload.pictures,
   };
  case PICTURE_LIST_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
