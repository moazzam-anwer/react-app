import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Components/Home';
import Pagenotfound from './Components/Pagenotfound';
import Search from './Components/Search';
import CakeDetails from './Components/CakeDetails';



function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" ><Login /></Route>
    <Route exact path="/signup" component ={Signup} />
    <Route exact path="/cake/:cakeid" component ={CakeDetails} />
    <Route exact path="/search" component ={Search} />
    <Route exact path="**" component ={Pagenotfound} />
    </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;


