import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { listProductsReducer } from './listProductReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { userSigninReducer } from './userReducers';

const initialState = {};
const reducer = combineReducers({
    productList: listProductsReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;