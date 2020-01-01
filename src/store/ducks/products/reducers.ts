import { ProductsState, ProductsTypes, ProducActionTypes } from "./types"

const INITIAL_STATE: ProductsState = {
  data: {data: [], pagination: {}},
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
