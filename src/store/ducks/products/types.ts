/**
 * Action Types
 */

export enum ProductsTypes {
  LOAD_REQUEST = "@products/LOAD_REQUEST",
  LOAD_SUCCESS = "@products/LOAD_SUCCESS",
  LOAD_FAILURE = "@products/LOAD_FAILURE",
  DEBUG = "@products/DEBUG"
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

export interface Debug {
  type: ProductsTypes.DEBUG
  payload: boolean
}

export type ProducActionTypes = LoadRequestActionType | LoadSuccessActionType | LoadFailureActionType | Debug

/**
 * 
 * docs types
 */

export interface Product {
  readonly _id: string
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
  readonly limit?: number
}

export interface ProductPagination {
  docs: Product[]
  totalDocs: number 
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  search: string 
}
/**
 * State type
 */

export interface ProductsState {
  readonly data: ProductPagination
  readonly debug: boolean
  readonly loading: boolean
  readonly error: boolean
}

