import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    total:0
  }
export const reducer = (state = initialState, {type, payload})=>{
    // console.log(payload)
switch(type){
    case PRODUCT_REQUEST : return {...state, isLoading:true}
    case GET_PRODUCT_SUCCESS : return {...state, isError:false, isLoading:false, products:payload}
    case PRODUCT_FAILURE : return {...state, isError:false}
    case "TOTAL" : return {...state, total:payload}
    default: return state
}
}
