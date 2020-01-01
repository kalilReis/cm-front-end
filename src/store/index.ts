import { createStore, applyMiddleware, Store } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { ProductsState } from "./ducks/products/types"

import rootReducer from "./ducks/rootReducer"

export interface ApplicationState {
  products: ProductsState
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
)

export default store
