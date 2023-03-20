import {combineReducers} from 'redux'
import { productReducer,selectedProductsReducer } from './productReducers'
const reducers =combineReducers({
    allproducts:productReducer,
    product: selectedProductsReducer,
})
export default reducers;