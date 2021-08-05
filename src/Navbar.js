import Login from './Login'
import React, { useState, useEffect } from 'react';
import { Link ,withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import Search from './Search'


function Navbar(props) {

  const [search, setSearch] = useState({});
  let logostyle = {width: 35+ 'px' , height:  35+ 'px'}
  let buttonstyle = {marginRight: 35+ 'px'}

  useEffect(()=>{
    // console.log("useEffect props>>>>navbar>>>>>>>>>>>>",props)
  },[])

  let handleSearch = (e)=>{
    if(e.target.value.length > 0){
      setSearch(e.target.value)
    }
  }

  let searchClick = () =>{
    if(search.length > 0){
      props.history.push(`/search?q=${search}`)
    }
  }

  let logoutClick = () =>{
    localStorage.clear();     
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={props.logo} style={logostyle} className="rounded-circle" alt="Paul Cake Shop"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home </a>
          </li>
          
          
         
          {props.isUserloggedIn &&  <li className="nav-item" style={{marginLeft:'50px'}}>
            <a className="nav-link">Welcome {props.name ? props.name : localStorage.name}</a>
          </li>}
          <li className="nav-item" style={{marginLeft:'200px'}}>
            <form className="form-inline my-2 my-lg-0">

              <input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button onClick={searchClick} style={buttonstyle} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
          </li>
          {! props.isUserloggedIn &&  <li className="nav-item ">
            <Link to="/login"><a className="nav-link">Login</a></Link>
          </li>}
          {! props.isUserloggedIn && <li className="nav-item ">
            <Link to="/signup"><a className="nav-link">Sign Up</a></Link>   
          </li>}
          
          {props.isUserloggedIn &&  <li className="nav-item">
            <a className="nav-link" onClick={logoutClick} >Logout</a>
          </li>}
          {props.isUserloggedIn &&  <li className="nav-item">
            <a className="nav-link" href="/cart">Cart ({props.cartcount})</a>
          </li>}
          {props.isUserloggedIn &&  <li className="nav-item">
            <a className="nav-link" href="/add-product">Add Product</a>
          </li>}
        </ul>
      </div>
    </nav>
  );
}


Navbar = withRouter (Navbar)
export default connect((state,props) => {
  return{
    isUserloggedIn : state['authReducer']['isUserloggedIn'],
    name : state['authReducer']['user'] && state['authReducer']['user']['name'],
    cartcount : state['cartReducer']['cartdata'].length,
  }
})(Navbar);
