import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import Cake from './Components/Cake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Loader from 'react-loader-spinner';


let cake = {
  name:"Chocolate Truffle",
  price:500,
  image:"truffle.jpeg"
}

let cake2 = {
  name:"Fruit Cake",
  price:800,
  image:"fruit.webp"
}
function App() {
  return (
    <div>
     <Navbar ></Navbar>
    
     <Signup />
     <Carousel />
     <div className="row">
     <Cake data={cake} />
     <Cake data={cake2} />
     </div>
     <Login />

   
    </div>
  );
}

export default App;
