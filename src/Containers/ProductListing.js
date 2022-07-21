import axios from 'axios'
import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
const ProductListing = () => {
   // const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            });
    
        dispatch(setProducts(response.data))
       
    }
    useEffect(() => {
        fetchProducts();

    })
    
    return (
        <div className="ui grid container">
      <ProductComponent />
    </div>




    )
}

export default ProductListing