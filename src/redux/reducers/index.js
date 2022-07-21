import {combineReducers} from 'redux'
import { productReducer, productselectedReducer } from './productReducer'
const reducers = combineReducers({
    allproducts:productReducer,
    product : productselectedReducer
})
export default reducers;