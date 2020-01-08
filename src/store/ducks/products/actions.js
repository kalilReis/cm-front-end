import { ProductsTypes } from "./types"
import api from "../../../services/api"

export const loadAction = (search, page, perPage) => async dispatch => {
  try {
    const res = await api.get(
      `/products?q=${search}&page=${page}&limit=${perPage}`
    )
    dispatch({ type: ProductsTypes.LOAD_SUCCESS, payload: {...res.data, search: search}})
  } catch (error) {
    console.log(error)
  }
}

export const setDebugAction = (isDebug) => async dispatch => {
  console.log("setDebugAction=" + isDebug)
  dispatch({ type: ProductsTypes.DEBUG, payload: isDebug})
} 

export const setPageLimitAction = (num) => async dispatch => {
  dispatch({ type: ProductsTypes.SET_PAGE_LIMIT, payload: num})
} 

export const setPageAction = (num) => async dispatch => {
  dispatch({ type: ProductsTypes.SET_PAGE, payload: num})
}

export const setSearchValueAction = (value) => async dispatch => {
  dispatch({ type: ProductsTypes.SET_SEARCH_VALUE, payload: value})
}