import { Actiontypes } from "../Constant/action-type"

export const setProducts =(products)=>{
return{
    type: Actiontypes.SET_PRODUCT,
    payload: products
}

}
export const selectProduct = (product)=>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeProduct =(product)=>{
    return{
        type:Actiontypes.REMOVE_PRODUCT
    }
}