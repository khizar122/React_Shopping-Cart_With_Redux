
import {ActionTypes} from '../constants/actions-types'
export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  }; 
export const selectedProduct = (product)=>{

    return{
        type:ActionTypes.SELETED_PRODUCTS,
        payload:product
    };
};