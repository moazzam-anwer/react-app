// reducers are nothing but just pure functions who are responsible for updating the store

export var Ashu = function(state ={
    dell:10
},action){
// state means here state of store i.e that object whihc contains data
// action means what it has to do 

   switch(action.type){
       case "SOMEACTION" :{
           state = {...state}
           // do something to state
           return state
       }
       case "DELL_LAPTOP" :{
        state = {...state}
        state["dell"]-=1
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