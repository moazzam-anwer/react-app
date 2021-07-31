import {createStore , combineReducers , applyMiddleware} from "redux"
import { Ashu, Vaishali , AuthReducer } from "./reducers"

import createSaga from "redux-saga"
import RootSaga from "./sagas"

var sagaMiddleware = createSaga()

var reducers = combineReducers({Ashu,Vaishali , AuthReducer})

var store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)
export default store 


// store.subscribe(()=>{
//     console.log("i will be called on any event on store" , store.getState())
// })

// var storedata =  store.getState()

// console.log("state of store is initially " , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP"
// })

// var storedata =  store.getState()

// console.log("state of store is" , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP1"
// })

// store.dispatch({
//     type:"DELL_LAPTOP2"
// })
