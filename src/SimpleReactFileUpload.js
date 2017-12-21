import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    
    this.state ={
      file:null, uploadType: props.uploadType, uploadUrl: props.uploadUrl,response:""
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);

      if(response.data.fileSize>0){

        this.setState({response:'File Uploaded Successfully!'});
        console.log(this.state.response);
      }
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
  //  const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(this.state.uploadUrl, formData,config)
  }

  render() {
    return (
      <div>
      <h1>{this.state.uploadType}</h1>
      <form onSubmit={this.onFormSubmit}>

        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>

      <h3>{this.state.response}</h3>
      </div>
   )
  }
}



export default SimpleReactFileUpload;
