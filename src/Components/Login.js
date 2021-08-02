import {Component} from "react"
import { Link  , withRouter} from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import { Loginthunk } from "../reduxstore/thunks"


class Login extends Component{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Ashu"
        }
    }
    user = {}

    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    login = (event)=>{
        // updating the state
        event.preventDefault()
        let apiurl = "https://apifromashu.herokuapp.com/api/login"
        this.props.dispatch(Loginthunk(this.user))
        // axios({
        //     method:"post",
        //     url:apiurl,
        //     data:this.user  // we requrie structure like {email,name,password}
        // }).then((response)=>{
        //     console.log("response from login api",response)
        //     if(response.data.token){
        //         this.props.dispatch({
        //             type:"LOGIN",
        //             payload:response.data
        //         })
        //         localStorage.token = response.data.token
        //         this.props.history.push("/")
        //     }
        //     else{
        //         alert("Invalid Credentials")
        //     }
        // },(error)=>{
        //  console.log("error from login api",error)
        // })
       console.log("......................" , this.user) 
    }

    render(){
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                <form>
                <h1>Login Here</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                </div>
                <div>
                    <Link to="/signup">New User? Signup Here</Link>
                </div>
                <div>
                <label className="errormessage">{this.state.errorMessage}</label>
                <button style={{float:"right"}} onClick={this.login} type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}

Login = withRouter(Login)
export default connect()(Login)

// withRouter is adding props to Login Component 