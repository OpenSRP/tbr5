import React, {Component} from 'react';
import axios, { post } from 'axios';
class ReportDetail extends Component {

  constructor(props){
    super(props);
    console.log("this props");
    console.log(props.location.state.report);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.renderReportHTML=this.renderReportHTML.bind(this);
    this.state={htmlreport:"" ,report:props.location.state.report};


  }
  renderInput(){
    if(!this.state.report){
      return <div>Select a Report!</div>
    }
    const report=this.state.report;
    const parameters= this.state.report.parameters;
    console.log(parameters);
    var inputs=[];
    for (var key in parameters) {
      if(parameters.hasOwnProperty(key)) {
        var varType = parameters[key];
      inputs.push(<div className="form-group"> <label for={key} >{key}:</label><input id={key} ref={key} type={parameters[key]} onChange={(e) => this.onInputChange(e, varType)}   className="form-control col-md-8"  /></div>);
    }
    }

    console.log(inputs.length);
    if(inputs.length!=-1){
      // var myObj = {};
      //
      // var json=JSON.stringify(myObj);
      // var url=this.props.report.reportURL+"&&id="+encodeURIComponent(json)+"&&format=html";
      // const result= axios.get(url);
      // console.log(result);
    }


  return (
    <div>
    <h3>{this.state.report.reportName}</h3>
    {inputs}
    <div className="form-group">
    <input  type="button" className="col-md-1 btn btn-primary btn-md" onClick={this.onButtonClick} value="PDF" />
    <input type="button" className=" col-md-1 btn btn-info btn-md" onClick={this.onButtonClick}  value="CSV" />
    <input type="button" className=" col-md-1 btn btn-info btn-md" onClick={this.onButtonClick}  value="HTML" />

    </div>

    </div>
    )

  }


  componentDidMount(){
    var myObj = {};

    var json=JSON.stringify(myObj);

    var url=this.state.report.reportURL+"&&id="+encodeURIComponent(json)+"&&format=html";
    axios.get(url).then(results => {
      console.log("componentDidMount");
      console.log(results.data);
       this.setState({
         htmlreport: results.data
       });

    });

  }

  renderReportHTML(){
    var htmlreport="<div> helloss</div>";

    return ( <div dangerouslySetInnerHTML={{ __html: this.state.htmlreport }} />);

  }
  render(){
    if(this.state.htmlreport==null)
    {
      return (
        <div>
          {this.renderInput()};

        </div>
        )
    }
  return (
    <div>
      {this.renderInput()};
    {this.renderReportHTML()};
    </div>
    );
  }


  onInputChange(event,datatype){
    if (event.target.value==null || event.target.value=='' ) {
      alert("please enter values!");
      return false;
    }
    if(datatype=='java.lang.Integer'){
    if (isNaN(event.target.value))
    {
      alert("Must Enter Numbers");
      event.target.value='';
      return false;
    }
    }
  }

  onButtonClick(event){
    var format=event.target.value;
    format=format.toLowerCase();


    var myObj = {};
    var parameters=this.state.report.parameters;
    for (var key in parameters){
       var attrName = key;
       var attrValue = parameters[key];
       myObj[attrName] = document.getElementById(attrName).value;
   }
    var json=JSON.stringify(myObj);
    var url=this.state.report.reportURL+"&&id="+encodeURIComponent(json)+"&&format="+format;
    window.open(url);
  }


}



export default ReportDetail;
