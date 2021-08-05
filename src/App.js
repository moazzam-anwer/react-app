
import './App.css';
import Navbar from './Navbar'
// import Carousel from './Carousel'
// import Cake from './Cake'
import SearchCake from './SearchCake'
import Home from './Home'
// import Cake2 from './Cake2'
import Search from './Search'
import Cart from './Cart'
import Login from './Login'
import SignUp from './Signup'
// import Fileupload from './Fileupload'
// import Counter from './Counter'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch } from "react-router-dom";

import AddProduct from './admin/AddProduct'
import Forgot from './Forgot';

// import { Link ,withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import  axios from 'axios';


function App(props) {
  var [isLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('token') ? true :false)
  function loggedIn(){
    setUserLoggedIn(true)
  }

  useEffect(()=>{
    console.log("useEffect props>>>>app>>>>>>>>>>>>",props)
    if(props.cartcount == 0 && localStorage.token){
      props.dispatch({
        type:"getcartitems",
      })
    }
  },[])


  return (
    <div className="App">
       
          <Loader
            type="Rings"
            color="#1b1919"
            height={200}
            width={200}
            timeout={4000} //3 secs
            style={{
              width: '100%',
              height: '100%',
              position:'fixed',
              zIndex:'9999', 
              left: '0',
              top: "0",
              background: '#e9e9e9',
              opacity: '0.5'
            }}
          />
        <Router>
          <Navbar logo={'images/logo.png'} isUserloggedIn={isLoggedIn} fun={''}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact ><Login loggedIn={loggedIn} /></Route>
            <Route path="/forgot" exact component={Forgot}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/search" exact component={Search}/>
            <Route path="/cart" exact><Cart data={''} /></Route>
            <Route path="/add-product" exact component={AddProduct}/>
            <Route path="/cake/:id" exact component={SearchCake}/>
            <Route path="**" ><Redirect to="/"></Redirect></Route>
          </Switch>
        </Router>        
    </div>

  );
}


export default connect((state,props) => {
  return{
    isUserloggedIn : state['authReducer']['isUserloggedIn'],
    name : state['authReducer']['user'] && state['authReducer']['user']['name'] || localStorage.name,
    cartcount : state['cartReducer']['cartcount'],
    cartdata : state['cartReducer']['Cart_Items']//cartdata
  }
})(App);
