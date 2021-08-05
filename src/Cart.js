import queryString from "query-string"
import React, { useState, useEffect } from 'react';
import  axios from 'axios';
import { useLocation } from "react-router-dom";
import { Link ,withRouter } from 'react-router-dom';
import { connect } from "react-redux"

function Cart(props){
    const [carttotal, setCartTotal] = useState(0);

    function remove(name) {
        props.dispatch({
            type:"deleteItemFromCart",
            payload:{'cakeid': name.cakeid}
        }).then(()=>{
            props.dispatch({
                type:"getcartitems",
            })
        })
    }

    function updateQuantity(res){
        // alert(res.quantity+1)
        // if(res.quantity )
    }

    function removeall(name) {
        // console.log(`hello`,name._id);
        // localStorage.setItem('cakeid',name._id)
        // props.dispatch({
        //     type:"removeCart",
        //     payload:{'cakeid': name._id}
        // })
    }

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            props.history.push("/login")
        }else{

            props.dispatch({
                type:"getcartitems",
            })

            // console.log(">>>>>>>>>>in cart pages>>>>>>>>>>>>>",props)


            let total=0;
            props && props.cartdata.map((res)=>{
                total = res.price + total
                setCartTotal(total)
            })
        }
    },[])

  return (
    <div className="container" style={{maxWidth:"100%",marginTop:"50px",marginLeft:"70px"}}>
        <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                    {props && props.cartdata.length == 0 &&
                        <div>
                        <p>No Cart Data found</p>
                        </div>
                    }

                    {props && props.cartdata.map((res)=>{
                        return (<tr>
                            <td className="col-sm-8 col-md-6">
                            <div className="media">
                                <a className="thumbnail pull-left" href="#"> 
                                  <img className="media-object" src={res.image} style={{width: "72px", height: "72px"}}/> 
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading"><a href="#">{res.name}</a></h4>
                                    <span>Weight: </span><span className="text-success"><strong>{res.weight}</strong></span>
                                </div>
                            </div></td>
                            <td className="col-sm-1 col-md-1" style={{textAlign: "center"}}>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    name="quentity" 
                                    // value={res.quantity}
                                    onChange={() => updateQuantity(res)}
                                />
                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>{res.price}</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>{res.price}</strong></td>
                            <td className="col-sm-1 col-md-1">
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={() => remove(res)}
                            >
                                <span className="glyphicon glyphicon-remove"></span> Remove
                            </button></td>
                        </tr>)
                        })}
                        
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h3>Total</h3></td>
                            <td className="text-right"><h3><strong>{carttotal}</strong></h3></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>
                            <button type="button" className="btn btn-default">
                                <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                            </button></td>
                            <td>
                                <button type="button" className="btn btn-success">
                                    Checkout <span className="glyphicon glyphicon-play"></span>
                                </button>
                            </td>
                            <td>    
                                <button type="button" className="btn btn-warning" onClick={() => removeall('')}>
                                    Remove All <span className="glyphicon glyphicon-remove-circle"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}


// const mapStateToProps = (state) => ({
//     cartdata: state.Cart_Items,
// })
// Cart = connect(mapStateToProps,null)(Cart)
// export default Cart;
 

Cart = withRouter (Cart)
export default connect((state,props) => {
// console.log("state>>>>>>>>>>",state)
  return{
    cartdata : state['cartReducer']['cartdata']
  }
})(Cart);
