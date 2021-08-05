import { Component } from "react";
// import  axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddProduct extends Component{

  constructor(props){
    super(props)
    this.state ={
      ingredients:[],
      ingredientsarr:[],
      fields:[]

    }
    this.handleChange = this.handleChange.bind(this);
  }

  addInput = ev => {
    this.setState(prev => ({ ingredients: [...prev.ingredients, 'Hi'] }))
  }

  handleChange = (evt) => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Name
    // if(!fields[evt.target.name]){
    //   formIsValid = false;
    //   errors[evt.target.name] = "Cannot be empty";
    // }

 
    console.log("error>>>>>>>>[]>>>>>>>>>>>>>>",errors)
    this.setState({errors: errors});
    this.setState({ [evt.target.name]: evt.target.value,formIsValid:formIsValid });

  }

  handleChangeIngredients = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log("state>>>>>>>>>>>>>>>>>",this.state)
  }

  handleSubmitevents = (e)=> {
    if(this.state.formIsValid){
      console.log(this.state)
    }else{
      console.log("errors>>>>>>>>>>>>>>>>>>>>",this.state.errors)
      toast(this.state.errors)
    }
    
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-6" style={{marginTop:'100px',marginBottom:'100px',marginLeft: '301px'}}>
            
                <label for="name" className="col-sm-3 control-label">Cake Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="cakename" 
                  id="cakename" 
                  placeholder="Cake Name" 
                  onChange={this.handleChange} 
                />
                <label for="about" className="col-sm-3 control-label">Description</label>
                <textarea 
                className="form-control" 
                name="description"
                onChange={this.handleChange} 
                ></textarea>

                <label className="control-label small" for="date_start">Weight: </label>
                <input 
                type="text" 
                className="form-control" 
                name="Weight" 
                id="weight" 
                placeholder="weight" 
                onChange={this.handleChange} 
                />

                <label for="price" className="col-sm-3 control-label">Price</label>
                <input 
                type="text" 
                className="form-control" 
                name="price" 
                id="price" 
                placeholder="Price" 
                onChange={this.handleChange} 
                />
            

                <label for="tech" className="col-sm-3 control-label">Type</label>
                <select 
                  className="form-control"
                  name="type"
                  onChange={this.handleChange} 
                >
                    <option value="">Select Cake type</option>
                    <option value="texnolog2">Cake 1</option>
                    <option value="texnolog3">Cake 2</option>
                </select>

                <label for="price" className="col-sm-3 control-label">Eggless</label>
                <input 
                type="checkbox" 
                className="form-control" 
                name="eggless" 
                id="eggless" 
                placeholder="Eggless" 
                onChange={this.handleChange} 
                />
              

                <label className="control-label small" for="date_start">Flavour: </label>
                <input 
                type="text" 
                className="form-control" 
                name="flavour" 
                id="flavour" 
                required
                placeholder="flavour" 
                onChange={this.handleChange} 
                />

              <label for="price" className="col-sm-3 control-label">ingredients</label>
              <div className="abc">
                <a className="btn btn-primary" style={{margin: '10px'}}  onClick={this.addInput}>Add input</a>
                  {this.state.ingredients.map((node,i) => <input key={'paul'+i} style={{margin: '10px'}} type="text" className="form-control" name="ingredientsarr" placeholder="ingredients" onChange={this.handleChangeIngredients} 
                />)}
                <button type="button" style={{margin: '10px'}} onClick={this.handleSubmitevents} className="btn btn-primary">Add</button>
              </div>
              <ToastContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
