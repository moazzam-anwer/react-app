import {useState , useEffect} from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"



 function Navbar(props){
    var [title, setTitle] = useState("Moazzam's Cake Gallery")
    var [searchtext, setSearchText] = useState(undefined)

    function search(e){
      e.preventDefault()

      if(searchtext){
        var url = "/search?q="+searchtext
        props.history.push(url)
      }
    }
    function getSearchText(event){
      setSearchText(event.target.value)
    }

    function logout(){
      localStorage.clear()
      window.location.reload()
    }
   return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<Link to="/" class="navbar-brand">{title}</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      {props.name && <li className="navbar-brand">
      Welcome {props.name}
    </li>}
      <form style={{marginLeft:"10em"}} class="form-inline my-2 my-lg-0">
        <input onChange={getSearchText} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={search}  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </ul>
     {props.isuserloggedin==false && <form class="form-inline my-2 my-lg-0">
      <Link to="/login"> <button  class="btn btn-primary my-2 my-sm-0" type="submit">Login</button></Link>
      </form>}

      {props.isuserloggedin==true && <form class="form-inline my-2 my-lg-0">
          <button onClick={logout}  class="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
          <Link to="/cart"><button  class="btn btn-warning my-2 my-sm-0" type="submit">Cart</button></Link>

      </form>}
    </div> 
  </nav>
   )

}
Navbar = withRouter(Navbar)
export default connect(function(state,props){
  console.log(".............. state" , state)
  return {
    isuserloggedin : state["AuthReducer"]["isuserloggedin"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(Navbar)


