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
