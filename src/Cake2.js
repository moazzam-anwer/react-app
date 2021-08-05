import React, { useState, useEffect } from 'react';
//import cakesdata from './cakesdata';
import  axios from 'axios';
import { Link, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"
import Cart from './Cart';

let cakesdata = [];


export function Cake2(props) {
  const [textInput, setTextInput] = useState(0);
  //const [cakes, setCakes] = useState(props.data);
  
  // console.log(">>>>>>>>>>cake2>>>>>>>>>>>>>>>>>>>>>>>>>",props.data)

  useEffect(() => {

    // console.clear()
    // console.log(">>>>>>>>>>>>>>>>under useEffect>>>>>>>>>>>>>>>>>>>",props.data)

    const fetchData = async () => {
      axios.get('https://apifromashu.herokuapp.com/api/allcakes')
      .then(function (response) {
        // console.log(response.data.data);
        //setCakes(response.data.data)
        // cakesdata = response.data.data
        localStorage.setItem('data',JSON.stringify(response.data.data))
        props.dispatch({
          type:"GETCAKES",
          payload:response.data.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(props && props.data == undefined || !localStorage.data ){
      fetchData();
    }

  }, []);

  const handleChange = (event) => {
    setTextInput(event.target.value);
    // if(event.target.value.toString() !== "") setCakes(cakesdata)
  }

  let cakeArray = cakesdata;
  useEffect(() => {  
    setTextInput(props.res)
    if(props.res !== ''){
      handleClick()
    }
    // console.log("search text>>>>>>>>>>>>>>>"+textInput)
    // console.log(">>>>>>>>props>>>>>>>>>>>>>>>>>>>",props)

  });

  const handleClick = () => {
    // cakeArray = cakesdata.filter((res)=>{
    //   return res.name.trim().toString() == textInput.trim().toString();
    // }) 

    // setCakes(cakeArray)
  }

  const handleReset = () => {
    //setCakes(cakesdata)
  }

  const cart = (res) => {
    if(!localStorage.getItem('token')){
      alert("you need to login frist")
    }else{
      // console.log("res>>>>>>>>>>>>>>>>>>",res)
      let cakedata = {
        name:res.name,
        cakeid:res.cakeid,
        price:res.price,
        weight:"1",
        image:res.image
      }
  
      axios.post('https://apifromashu.herokuapp.com/api/addcaketocart',cakedata)
      .then(function (response) {
        props.dispatch({
          type:"CARTCOUNT"
        })
        alert(response.data.message)
      })
      .catch(function (error) {
        console.log(error);
      });
    }   
  }

  return(
    <div className="container">
      <div className="row">
        {props.cakes.length == 0 &&
            <div>
              <p>No Cake found</p>
            </div>
          }
        {props.cakes.length >0 && props.cakes.map((res,i)=>{
          return <div key={i+'item'} style={{ marginTop: 20+'px', marginBottom: 20+'px'}} className="col-12 col-md-4 col-lg-4">
            <div className="card">
                <img className="card-img-top" style={{width: 350+ 'px' , height:  350+ 'px'}} src={res.image} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">
                      <Link to={`/cake/${res.cakeid}`}>{res.name}</Link>
                    </h4>
                    
                    <p className="card-text">{res.description}</p>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block">{res.price} ₹</p>
                        </div>
                        <div className="col">
                            <a 
                              className="btn btn-success btn-block" 
                              onClick={() => cart(res)}
                            >Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        })}
      </div> 
    </div>
  )
}


Cake2 = withRouter(Cake2)
export default connect((state,props)=>{
  return {
    cakes: state['cakeReducer']['data']
  }
})(Cake2);