import { createStore,combineReducers } from "redux";
import getFetchReducer from "./reducers/getFetchReducer";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    fetch: getFetchReducer,
    cart: cartReducer
}) 

const store = createStore(rootReducer);

export default store;