import { createStore,combineReducers } from "redux";
import getFetchReducer from "./reducers/getFetchReducer";




const store = createStore(getFetchReducer);

export default store;