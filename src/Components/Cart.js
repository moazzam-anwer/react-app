import { connect } from "react-redux"
import { useEffect } from "react"

function Cart(props){
    useEffect(()=>{
        props.dispatch({
            type:"Cart_Items"
        })
    })
    return (
        <div>
            <h1>Cart Page</h1>
        </div>
    )
}

export default connect()(Cart)