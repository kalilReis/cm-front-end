import { combineReducers } from "redux"

import {productReducer} from "./products/reducers"

export default combineReducers({ products: productReducer })
