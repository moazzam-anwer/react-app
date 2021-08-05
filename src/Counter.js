import { Component } from "react";


class Counter extends Component{


  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {    document.title = `You clicked ${this.state.count} times`;  }  componentDidUpdate() {    document.title = `You clicked ${this.state.count} times`;  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
  // constructor(){
  //   super()
  //   this.state ={
  //     user:0
  //   }
  // }

  // count = ()=>{
  //   this.setState({
  //     user:this.state.user + 1
  //   })
  // }

  // render(){
  //   return(
  //     <div>
  //       <button className="btn btn-info" onClick={this.count}>Add</button>
  //       <label>{this.state.user} Joined</label>
  //     </div>
  //   )
  // }

} 

export default Counter;
