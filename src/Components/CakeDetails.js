import { useState, useEffect } from "react"
import axios from "axios"

function CakeDetails(props){
   var [cakedetails , setCakedetails]  = useState({})
   useEffect(()=>{
    let apiurl = process.env.REACT_APP_BASE_API + "/cake/" + props.match.params.cakeid

    axios(
      {
        method:'get',
       url:apiurl    
     }
    ).then((response)=>{
      console.log("response from  cake details api" , response.data)
      setCakedetails(response.data.data)
    },(error)=>{
      console.log("error from all cakes api" , error)
    })
    
   }, [])

   return (
       <div>
           <h1>
               Cake Details Page  for this cake {props.match.params.cakeid}
           </h1>
       </div>
   )
}

export default CakeDetails