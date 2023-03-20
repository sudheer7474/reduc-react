import { Actiontypes } from "../Constant/action-type"

const initialState = {
    products:[
        {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

    ]
}

export const productReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case Actiontypes.SET_PRODUCT:
          return { ...state, products: payload };
        default:
          return state;
      }


}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case Actiontypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case Actiontypes.REMOVE_PRODUCT:
        return {};
      default:
        return state;
    }
  };