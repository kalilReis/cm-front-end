/**
 * Action Types
 */

export enum ProductsTypes {
  LOAD_SUCCESS = "@products/LOAD_SUCCESS",
  DEBUG = "@products/DEBUG",
  SET_PAGE_LIMIT = "@products/SET_PAGE_LIMIT",
  SET_PAGE = "@products/SET_PAGE",
  SET_SEARCH_VALUE = "@products/SET_SEARCH_VALUE"
}

/**
 * ActionTypes
 */


export interface LoadSuccessActionType {
  type: ProductsTypes.LOAD_SUCCESS
  payload: ProductPagination
}


export interface Debug {
  type: ProductsTypes.DEBUG
  payload: boolean
}

export interface SetPageLimit {
  type: ProductsTypes.SET_PAGE_LIMIT
  payload: number
}

export interface SetPage {
  type: ProductsTypes.SET_PAGE
  payload: number
}

export interface SetSearchValue {
  type: ProductsTypes.SET_SEARCH_VALUE
  payload: string 
}
export type ProducActionTypes = 
  LoadSuccessActionType | 
  Debug | 
  SetPageLimit | 
  SetPage | 
  SetSearchValue

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

