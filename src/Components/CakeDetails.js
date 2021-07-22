function CakeDetails(props){
   return (
       <div>
           <h1>
               Cake Details Page  for this cake {props.match.params.cakeid}
           </h1>
       </div>
   )
}

export default CakeDetails