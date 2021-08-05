import { Component } from "react";
import  axios from 'axios';
import { Link, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"
import Cake2 from './Cake2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loginthunk } from "../src/reduxstore/thunks"

class Login extends Component{

  constructor(props){
    super(props)
    this.state ={
      email:'',
      password:'',
      search:"",
      loggedIn: false,
      errors: {}
    }
  }

  handleChangeEmail = (event) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(event.target.value)) {
      this.setState({email:event.target.value, erroremail:'Please enter valid email address'})
    }else{
      this.setState({email:event.target.value, erroremail:''})
    }
  }

  handlePasswordChange = (event)=> {
    this.setState({password:event.target.value,errorpassword:''})
  }

  handleSubmitevents = (e)=> {
    e.preventDefault()
    if(this.state.email == ""){
     this.setState({ erroremail : "Eamil required" })
    } 
    if(this.state.password == ""){
      this.setState({ errorpassword : "Password required" })
    }
    // console.log(this.state)
    if( this.state.errorpassword == '' && this.state.erroremail == ''){

      this.props.dispatch(
        Loginthunk({"email":this.state.email,"password":this.state.password})
      ).then(()=>{
        // console.log("props>>>>>>>>>000>>>>>>>>>>>>",this.props)
        if(this.props.isUserloggedIn){
          this.props.dispatch({
            type:"getcartitems",
          })
          toast('Login Successfully Done')
          localStorage.setItem('token',this.props.token)
          localStorage.setItem('name',this.props.name)
          this.props.history.push("/home")
        }
      })
      

      

    }
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
          
            <div className="col-6 col-md-6 col-lg-6" style={{marginTop:'100px',marginLeft: '301px'}}>
              <label>Email</label>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                value={this.state.email} 
                onChange={this.handleChangeEmail} 
              />
              <div className="text-danger">{this.state.erroremail}</div>

              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                className="form-control" 
                value={this.state.password} 
                onChange={this.handlePasswordChange } 
              />
              <div className="text-danger">{this.state.errorpassword}</div>
              <br/>
              <button className="btn btn-primary" type="button" style={{margin: '10px'}} onClick={this.handleSubmitevents} >Login</button>
              <button className="btn btn-default"  type="button"><Link to="/forgot">Forgot Password ?</Link> </button>  
          </div>
          
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  }
}

Login = withRouter(Login)
export default connect((state,props) => {
  // console.log("state>>>>>>>>>>in login>>>>>>>>>>>>>>>>>",state)
  return{
    isUserloggedIn : state['authReducer']['isUserloggedIn'],
    name : state['authReducer']['user'] && state['authReducer']['user']['name'],
    token : state['authReducer']['user'] && state['authReducer']['user']['token'],
    cartcount : state['cartReducer']['cartcount'],
    cartdata : state['cartReducer']['cartdata']
  }
})(Login);
