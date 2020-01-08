import { ProductsTypes } from "./types"
import api from "../../../services/api"

export const load = (search, page, perPage) => async dispatch => {
  try {
    const res = await api.get(
      `/products?q=${search}&page=${page}&limit=${perPage}`
    )
    dispatch({ type: ProductsTypes.LOAD_SUCCESS, payload: {...res.data, search: search}})
  } catch (error) {
    console.log(error)
  }
}
