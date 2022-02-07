import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
 productListReducer,
 productDetailsReducer,
 productDeleteReducer,
 productCreateReducer,
 productUpdateReducer,
 productTopRatedReducer,
} from './reducers/productReducers.js';
import {
 userLoginReducer,
 userDetailsReducer,
 userUpdateProfileReducer,
} from './reducers/userReducers';
import {
 digitalCardReducer,
 digitalCardDetailsReducer,
} from './reducers/digitalCardReducers';
import { pictureListReducer } from './reducers/pictureReducer';
import { recommendListReducer } from './reducers/recommendReducer';

const reducer = combineReducers({
 productList: productListReducer,
 productDetails: productDetailsReducer,
 productDelete: productDeleteReducer,
 productCreate: productCreateReducer,
 productUpdate: productUpdateReducer,
 productTopRated: productTopRatedReducer,
 userLogin: userLoginReducer,
 userDetails: userDetailsReducer,
 userUpdateProfile: userUpdateProfileReducer,
 digitalCard: digitalCardReducer,
 digitalCardDetails: digitalCardDetailsReducer,
 pictureList: pictureListReducer,
 recommendList: recommendListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo'))
 : null;

const initialState = {
 userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
