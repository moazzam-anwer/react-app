import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer,cakeReducer,cartReducer } from "./reducers"//attendTraning ,leftTraning,
import thunk from "redux-thunk";

import createSaga from "redux-saga"
import RootSaga from "./sagas"

var sagaMiddleware = createSaga()

var reducers = combineReducers({authReducer,cakeReducer,cartReducer})//attendTraning ,leftTraning,
var store = createStore(reducers, applyMiddleware(sagaMiddleware,thunk))

sagaMiddleware.run(RootSaga)    
export default store


store.subscribe(()=>{
    console.log("i will be called on any event on store" , store.getState())
})