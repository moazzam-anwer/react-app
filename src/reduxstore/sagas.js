
import {all , takeEvery , put} from "redux-saga/effects"
import axios from "axios"
function *Swarnabha({ payload }){
  // first make and async task  and based on result dispatch necessary action
  var success = true
  yield put({
      type:"CART_FETCHING"
  })

  var response  = yield axios({method:"post",
   url:"https://apifromashu.herokuapp.com/api/cakecart",
   data:{ payload }
  })
  console.log("data  from cart items " , response)
  if(response.data.data){
      yield put({
        type:"CARTDETAILS",
        payload:response.data.data
    })
  }else{
    yield put({
        type:"CART_FAILURE"
    })
  }
}


function *CartSaga(){
  yield takeEvery( 'getcartitems' , Swarnabha)//CartGenerator
}

/////////////////////////////////////////////////////////////////

function *DeleteCart({ payload }){
  // first make and async task  and based on result dispatch necessary action
  var success = true
  yield put({
      type:"CART_FETCHING",payload
  })
  console.log("=============DeleteCart=payload=========== " , payload)

  var response  = yield axios({method:"post",
   url:"https://apifromashu.herokuapp.com/api/removecakefromcart",
   data:payload
  })
  console.log("data  from cart items " , response)
  if(response.data.data){
      yield put({
        type:"DELETECAKEFORMCART",
        payload:response.data.data
    })
  }else{
    yield put({
        type:"CART_FAILURE"
    })
  }
}


function *DeleteCartSaga(){
  yield takeEvery( 'deleteItemFromCart' , DeleteCart)//CartGenerator
}

///////////////////////////////////////////////////////////////

/////////////////////////////Start Remove cart////////////////////////////////////

function *RemoveCart({ payload }){
  var success = true
  yield put({
      type:"CART_FETCHING",
      payload
  })
  console.log("==============RemoveCart=========== " , payload)

  var response  = yield axios({method:"post",
   url:"https://apifromashu.herokuapp.com/api/removeonecakefromcart",
   data:payload
  })
  console.log("data  from cart items " , response)
  if(response.data.data){
      yield put({
        type:"REMOVECAKEFROMCART",
        payload:response.data.data
    })
  }else{
    yield put({
        type:"CART_FAILURE"
    })
  }
}


function *RemoveCartSaga(){
  yield takeEvery( 'removeCart' , RemoveCart)//CartGenerator
}

//////////////////////////////End Remove cart/////////////////////////////////

export default function *RootSaga(){
    console.log("root sga ")
 yield all([CartSaga(),DeleteCartSaga(),RemoveCartSaga()])
}