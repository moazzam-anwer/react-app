// reducers are nothing but just pure functions who are responsible for updating the store


export var AuthReducer = function(state ={
    isuserloggedin : localStorage.token?true:false,
    isloading:false
},action){
// state means here state of store i.e that object whihc contains data
// action means what it has to do 
   console.log("ooooooooooooooooo")
   switch(action.type){
       case "LOGIN" :{
           state = {...state}
           state["isuserloggedin"] = true
           state["user"] = action.payload
           console.log(">>>>>>>>>>>>>>>>>>>>" , state)
           return state
       }
       default : return state
   }
}

export var Ashu = function(state ={
    dell:10
},action){
// state means here state of store i.e that object whihc contains data
// action means what it has to do 

   switch(action.type){
       case "CART_FETCHING" :{
           state = {...state}
           state["isloading"] = true
           return state
       }
       case "CART_FTECHED" :{
        state = {...state}
        state["isloading"] = false
        state["cartitems"] = action.payload
        return state
    }
    case "CART_FAILURE" :{
        state = {...state}
        state["isloading"] = false
        state["carterror"] = "Some Error Occurred"
        return state
    }

       default : return state
   }
}


export var Vaishali  = function(state =  {
    attendees :0
} , action){
     switch(action.type){
        case "REGISTER" :{
            state= {...state}
            state["attendees"]+=1
            return state
        }
        case "DEREGISTER" :{
            state= {...state}
            state["attendees"]-=1
            return state
        }
        default : return state
     }
}