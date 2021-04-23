import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import productListReducer from './reducers/productListReducer';

const initialState ={}
const  reducer =combineReducers({
    productList : productListReducer,
})

 const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore( reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store