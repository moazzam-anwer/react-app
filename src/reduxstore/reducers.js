export var cartReducer =function(state={
    cartcount:localStorage.cartcount ? localStorage.cartcount : 0,
    cartdata:localStorage.cartdata ? JSON.parse(localStorage.cartdata) : [],
},action){
switch(action.type){
    
    case "CART_FETCHING" :{
        state = {...state}
        state["isloading"] = true
        return state
    }
    case "DELETECAKEFORMCART":{
        state = {...state}
        state['removedata'] = action.payload
        console.log("DELETECAKEFORMCART>>>>>>>>>>>>>>>",state)
        return state;
    } 
    case "REMOVECAKEFROMCART":{
        state = {...state}
        state['removedata'] = action.payload
        console.log("REMOVECAKEFROMCART>>>>>>>>>>>>>>>",state)
        return state;
    }
    case "CARTDETAILS":{
        state = {...state}
        state['cartdata'] = action.payload
        return state;
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


export var cakeReducer =function(state={
        data:localStorage.data ? JSON.parse(localStorage.data) : []
    },action){

    switch(action.type){
        case "GETCAKES":{
            state = {...state}
            state['data'] = action.payload
            return state;
        } 
        default : return state
    }
}

export var authReducer =function(state={
    isUserloggedIn:localStorage.token ? true : false,
    isloading:false
},action){
    switch(action.type){
        case "LOGIN_FETCH" :{
            state = {...state}
            state["isloading"] = true
            return state
        }
        case "LOGIN":{
            state = {...state}
            state['isUserloggedIn'] = true
            state['user'] = action.payload
            console.log("LOGIN>>>>>>>>>>>>>>>>>",state)

            return state;
        } 
        case "LOGIN_FAILURE" :{
            state = {...state}
            state["isloading"] = false
            state["loginerror"] = "Some Error Occurred"
            console.log("LOGIN_FETCHING>>>>>>>>>>>>>>>>>",state)

            return state
        }
        default : return state
    }
}

// export var attendTraning =function(state={employee:10},action){

//     switch(action.type){
//         case "SOMEACTION":{
//             state = {...state}
//             return state;
//         }
//         case "TOTAL_PARTICIPANTS":{
//             state = {...state}
//             state['employee']+=1
//             return state;
//         }    
//         default : return state
//     }
// }

// export var leftTraning =function(state={leftemployee:20},action){

//     switch(action.type){
//         case "SOMEACTION":{
//             state = {...state}
//             return state;
//         }
//         case "LEFT_PARTICIPANTS":{
//             state = {...state}
//             state['leftemployee']-=1
//             return state;
//         }    
//         default : return state
//     }
// }