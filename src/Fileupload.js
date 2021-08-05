import { Component } from "react";
import  axios from 'axios';


class Fileupload extends Component{

  constructor(){
    super()
    this.state ={
      selectedFile:[],
      imageUrl:'',
      token:localStorage.getItem('token')
    }
  }

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 



  onFileUpload = () => { 
    let _self = this;
    const formData = new FormData(); 
    formData.append('file',this.state.selectedFile); 

    axios.post(
      'https://apifromashu.herokuapp.com/api/upload',
      formData,
    )
    .then(function (response) {
      // console.log(response);
      if(response.data.message){
        alert(response.data.message)
      }else{
        alert('Successfully Uploaded')
        _self.setState({ imageUrl: response.data.imageUrl }); 
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  componentDidMount(){
   
  }

  render(){
    return(
      <div> 
        <h3> 
          File Upload
        </h3> 
        <div> 
            <input type="file" onChange={this.onFileChange} /> 
            <button onClick={this.onFileUpload}> 
              Upload! 
            </button> 
        </div>
        {this.state.imageUrl && <img src={this.state.imageUrl} height="70px" width="80px" />}
    </div> 
    )
  }

} 

export default Fileupload;

