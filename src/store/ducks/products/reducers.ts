import { ProductsState, ProductsTypes, ProducActionTypes } from "./types"

const INITIAL_STATE: ProductsState = {
  data: {
    docs: [], 
    search: "",
    totalDocs: 0, 
    limit: 4,
    totalPages: 0,
    page: 1, 
    pagingCounter: 0 
  },
  error: false,
  loading: false,
  debug: false
}

export function  productReducer(state = INITIAL_STATE, action: ProducActionTypes) {
  switch (action.type) {
    case ProductsTypes.DEBUG: return {...state, debug: action.payload}
    case ProductsTypes.LOAD_SUCCESS:
      return {...state, 
        loading: false,
        error: false,
        data: action.payload
      }
    case ProductsTypes.SET_PAGE_LIMIT: 
      return {...state, data: {...state.data, limit: action.payload} }
    case ProductsTypes.SET_PAGE: 
      return {...state, data: {...state.data, page: action.payload} }
    case ProductsTypes.SET_SEARCH_VALUE: 
      return {...state, data: {...state.data, search: action.payload} }
    default:
      return state
  }
}
