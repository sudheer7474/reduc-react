import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import { setProducts } from '../redux/Actions/productActions'
import ProductComponent from './ProductComponent'
import Footer from './Footer'
const ProductListing =()=>{
    const products = useSelector((state)=>state)
    
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setProducts(response.data));
        console.log(response)
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
    return(
        <div className="ui grid container" mt={10}>
        <ProductComponent />
        <Footer/>
        
      </div>
    )
}
export default ProductListing