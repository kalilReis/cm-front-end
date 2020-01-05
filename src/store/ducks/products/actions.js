import { ProductsTypes } from "./types"
import api from "../../../services/api"

export const load = (q, page, perPage) => async dispatch => {
  try {
    const res = await api.get(
      `/products?q=${q}&page=${page}&limit=${perPage}`
    )
    dispatch({ type: ProductsTypes.LOAD_SUCCESS, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}

//export const loadRequest = () => action(ProductsTypes.LOAD_REQUEST, {})

// export const loadSuccess = (data: Products[]) =>
//   action(ProductsTypes.LOAD_SUCCESS, { data })

// export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE)
