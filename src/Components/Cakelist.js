import Cake from "./Cake"
import { useEffect , useState } from "react"
import axios from "axios"

function Cakelist(props){
  var [cakes,setCakes] = useState([])
  useEffect(()=>{
   let apiurl =  process.env.REACT_APP_BASE_API + "/allcakes"
   axios(
     {
       method:'get',
      url:apiurl     }
   ).then((response)=>{
     console.log("response from all cakes api" , response.data)
     setCakes(response.data.data)
   },(error)=>{
     console.log("error from all cakes api" , error)
   })
   
  }, [])
    return (
        <div>
         {/* {cakes.length>0  &&    <div className="row">
          
            <Cake data={cakes[0]} />
            <Cake data={cakes[1]} />
            <Cake data={cakes[2]} />
            <Cake data={cakes[3]} />
<Cake data={cakes[4]} />  */}
  <div className ="row">
       {cakes.map((each,index)=>{
         console.log("picking cakes one by one" , index , each)
         return <Cake key={index} data={each} />
       })}

    </div> 
        </div>
    )
}

export default Cakelist