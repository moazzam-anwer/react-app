import queryString from "query-string"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Search.css';
import  axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Search(props){
  const [cakes, setCakes] = useState([]);
  let query = queryString.parse(props.location.search)
  // console.log("query is" , props)

  useEffect(()=>{
    // console.log("qery changed" , query)
    let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q="+ query.q
    axios.get(`https://apifromashu.herokuapp.com/api/searchcakes?q=${query.q}`)
    .then((response) => {
      // console.log("ssss",response);
      if(response.data.data.length == 0){
        toast("No cake found")

      }else{
        // onsole.log(">>>>>>>>>>>>>>>>>>>>>>>>",response.data)
        setCakes(response.data.data)

      }
    })
    .catch(function (error) {
      console.log(error);
    });
  },[query.q])

  const cart = (res) => {
    if(!localStorage.getItem('token')){
      alert("You need to login first")
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
        // console.log("''''''''''''''''''''''''''''",response)
        toast(response.data.message)
        // props.dispatch({
        //   type:"CARTCOUNT"
        // })
      })
      .catch(function (error) {
        console.log(error);
      });
    }   
  }

  return (
    <div className="container">
      Search for {query.q}
      <div className="row">
        {cakes.length == 0 && <div className="alert alert-warning col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ margin: '50px auto'}} role="alert">
          Opps no cake found
        </div>}
        {cakes.length >0 && cakes.map((res)=>{
        return <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="my-list">
            <img style={{height:'200px',width:'300px'}} src={res.image} alt={res.name} />
            <div className="offer" style={{marginTop: 50+'px'}}><Link to={`/cake/${res._id}`}>{res.name}</Link></div>
            <div className="offer">{res.price} ₹</div>
            <div className="offer">
              <a onClick={() => cart(res)} className="btn btn-info">Add To Cart</a>
            </div>
          </div>
        </div>
        })}
        <ToastContainer />
      </div>
    </div>
    
  )
}

export default Search
