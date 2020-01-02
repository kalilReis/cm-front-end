/**
 * Action Types
 */

export enum ProductsTypes {
  LOAD_REQUEST = "@products/LOAD_REQUEST",
  LOAD_SUCCESS = "@products/LOAD_SUCCESS",
  LOAD_FAILURE = "@products/LOAD_FAILURE"
}

/**
 * ActionTypes
 */

export interface LoadRequestActionType {
  type: ProductsTypes.LOAD_REQUEST
}

export interface LoadSuccessActionType {
  type: ProductsTypes.LOAD_SUCCESS
  payload: ProductPagination
}

export interface LoadFailureActionType {
  type: ProductsTypes.LOAD_FAILURE
}

export type ProducActionTypes = LoadRequestActionType | LoadSuccessActionType | LoadFailureActionType

/**
 * Data types
 */

export interface Product {
  readonly id: string
  readonly name: string
  readonly type: string 
  readonly size: string 
  readonly currentPrice: string 
  readonly previousPrice: string 
}

export interface Pagination {
  readonly hasPrevPage?: boolean 
  readonly hasNextPage?: boolean 
  readonly prevPage?: number 
  readonly nextPage?: number
  readonly totalPages?: number
  readonly page?: number
  readonly perPage?: number
}

export interface ProductPagination {
  data: Product[]
  pagination: Pagination
}
/**
 * State type
 */

export interface ProductsState {
  readonly data: ProductPagination
  readonly loading: boolean
  readonly error: boolean
}

