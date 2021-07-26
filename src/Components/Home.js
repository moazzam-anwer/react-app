import React from "react"
import Carousel from "./Carousel";
import Cakelist from "./Cakelist";
export const MyContext = React.createContext({id:10})

function Home(props){
    console.log("??????????????????????" , props)
    return (
        <div>
            <Carousel />
            <video controls>
                <source src="https://nodetrainingbucket.s3.ap-southeast-1.amazonaws.com/filhaal2.mp4"></source>
            </video>
            <MyContext.Provider>
            <Cakelist history={props.history}/>
            </MyContext.Provider>


           
        </div>
    )
}

export default Home