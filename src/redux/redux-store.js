import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"; 
import { infoBookReducer } from "./reducer";
import { authReducer } from "./authReducer";
import {withExtraArgument, thunk} from 'redux-thunk';

let reducers = combineReducers({
  infoBookReducer,
  authReducer,
})

let store = createStore(reducers, applyMiddleware(withExtraArgument(thunk)));

window.store = store;

export default store;