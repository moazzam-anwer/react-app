import { Component } from "react";
import  axios from 'axios';
import { Link ,withRouter } from 'react-router-dom';
import Cake2 from './Cake2'
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component{

  constructor(props){
    super(props)
    this.state ={
      name:'',
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

  handleNameChange = (event)=> {
    this.setState({name:event.target.value,errorname:''})
  }


  handleSubmitevents = (e)=> {
    if(this.state.email == ""){
     this.setState({ erroremail : "Eamil required" })
    } 
    if(this.state.name == ""){
      this.setState({ errorname : "Name required" })
    } 
    if(this.state.password == ""){
      this.setState({ errorpassword : "Password required" })
    }
    // console.log(this.state)
    if( this.state.errorpassword == '' && this.state.erroremail == '' && this.state.errorname == ''){

      axios.post('https://apifromashu.herokuapp.com/api/register',this.state)
      .then((response) => {
        // console.log(response);
        if(response.data.message){
          // alert(response.data.message)
          toast(response.data.message)

        }else{
          // alert('Successfully Done')
          toast('Signup Successfully Done')

          localStorage.setItem('token',response.data.token)
          //this.props.loggedIn()
          this.props.dispatch({
            type:"LOGIN",
            payload:response.data
          })
          this.props.history.push("/")
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    }
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
          
            <div className="col-6 col-md-6 col-lg-6" style={{marginTop:'100px',marginLeft: '301px'}}>
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                value={this.state.name} 
                onChange={this.handleNameChange} 
              />
              <div className="text-danger">{this.state.errorname}</div>
              
              <label>Email</label>
              <input 
                type="text" 
                name="email" 
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
              <button className="btn btn-primary" type="button" style={{margin: '10px'}} onClick={this.handleSubmitevents} >Signup</button>
              <button className="btn btn-default"  type="button"><Link to="/login">Already Login?</Link> </button>  
          </div>
          
          <ToastContainer />

          </div>
        </div>
      </div>
    );
  }
}

Signup = withRouter(Signup)
export default connect()(Signup)