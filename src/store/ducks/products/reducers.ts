import { ProductsState, ProductsTypes, ProducActionTypes } from "./types"

const INITIAL_STATE: ProductsState = {
  data: {
    docs: [], 
    totalDocs: 0, 
    limit: 10,
    totalPages: 0,
    page: 1, 
    pagingCounter: 0 },
    
  error: false,
  loading: false
}

export function  productReducer(state = INITIAL_STATE, action: ProducActionTypes) {
  switch (action.type) {
    case ProductsTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      }
    default:
      return state
  }
}
