import {Component} from "react"
import { Link  , withRouter} from "react-router-dom"


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

        console.log(">>>>>>>>>>>>>>>" , this.props)
        this.setState({
            name:"Ashu Lekhi",
            errorMessage:"Invalid Credentials"
        })
        if(this.user.email=="ashu.lekhi0540@gmail.com" && this.user.password=="test"){
            this.props.history.push("/")
        }
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

export default withRouter(Login)

// withRouter is adding props to Login Component 