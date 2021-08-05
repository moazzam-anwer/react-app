import { Component } from "react";
import  axios from 'axios';
import { Link  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Forgot extends Component{

  constructor(props){
    super(props)
    this.state ={
      email:'',
      password:'',
      search:"",
      erroremail:''
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

  handleSubmitevents = (e)=> {
    if(this.state.email == ''){
      this.setState({erroremail:"Enter your registered email"})
    }

    if(this.state.email !== '' && this.state.erroremail == ''){
      axios.post('https://apifromashu.herokuapp.com/api/recoverpassword',{'email':this.state.email})
      .then((response) => {
        // console.log(response);
        if(response.data.message){
          // alert(response.data.message)
          toast(response.data.message)

        }else{
          alert('Successfully DOne')
          localStorage.setItem('token',response.data.token)
          this.props.history.push("/")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }

  render(){
    // alert('render')
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6" style={{marginTop:'100px',marginLeft: '301px'}}>
              <label>Email</label>
              <input 
                type="text" 
                name="name" 
                value={this.state.email} 
                required
                className="form-control"
                onChange={this.handleChangeEmail} 
              />
              <div className="text-danger">{this.state.erroremail}</div>

              <br/>
              <button className="btn btn-primary" type="button" onClick={this.handleSubmitevents} >Get Password</button>
              <button className="btn btn-default" type="button"><Link to="/login"> Back to login</Link> </button>  

          </div>
          <ToastContainer />
          </div>
        </div>
      </div>
      );
  }
}

export default Forgot;
