import React, { useState, useEffect } from 'react';
import queryString from "query-string"
import  axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SearchCake(props) {
  const [cake, setCake] = useState([]);
  const [searchString, setSearchString] = useState('');


  let navSearch = function(res){
    setSearchString(res)
  }

  let query = queryString.parse(props.location.search)
  // console.log(props.match.params.id,"query is" , props)

 
  useEffect(()=>{
    // console.log("qery changed" , query)
    let apiurl = process.env.REACT_APP_BASE_API_URL + "/cake/"+ props.match.params.id
    axios.get(apiurl)
    .then((response) => {
      // console.log(response);
      if(response.data.message){
        // alert(response.data.message)
        // console.log(">>>>>>>>>>>response.data>>>>>>>>>>>>>",response.data.data)
        setCake(response.data !== null && response.data.data)

      }else{
        setCake('')

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
    <div>
      {/* <Navbar logo={'images/logo.png'} fun={navSearch}/> */}
      {/* <Carousel/> */}
      <div className="container">
        {cake == '' && <div>No cake found</div>}
        {cake !== '' && <div className="card" style={{marginTop: 50+'px'}}>
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={cake.image}  style={{margin: 50+ 'px' ,width: 350+ 'px' , height:  350+ 'px'}} />
                  </div>
                </div>
                
              </div>
              <div className="details col-md-6">
                <h3 className="product-title"><Link to={`/cake/${cake._id}`}>{cake.name}</Link></h3>
                <p className="product-description">{cake.description}</p>
                <h4 className="price">{cake.price} ₹</h4>
                
                <div className="action">
                  <button className="add-to-cart btn btn-info" type="button" onClick={() => cart(cake)}>add to cart</button>
                </div>
                <br></br>
                <div className="col-md-12" style={{marginButton: 50+'px'}}>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h6 className="price">Rating: {cake.ratings} </h6>
                    </li>
                    <li class="list-group-item">
                      <h6 className="price">Flavour: {cake.flavour} </h6>
                    </li>
                    <li class="list-group-item">
                      <h6 className="price">Eggless: <input type="checkbox" disabled value={cake.eggless} checked={cake.eggless} /> </h6>
                    </li>
                    <li class="list-group-item">
                      <h6 className="price">Weight: {cake.weight} </h6>
                    </li>
                    <li class="list-group-item">
                      <h6 className="price">
                        ingredients: {cake.ingredients}
                      </h6>
                    </li>
                  </ul> 
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>}
        <ToastContainer />
        <br/>
      </div>
    </div>
  )

}

export default SearchCake
