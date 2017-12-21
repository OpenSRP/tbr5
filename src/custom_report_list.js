import React,{Component} from 'react';
import * as constants from './utils/GlobalConstants.js';
import axios from 'axios';
import {Link} from 'react-router-dom';
class CustomReportsList extends Component{
  constructor(props){
    super(props);
    this.state = {
      reports:[]
    };
    this.renderList=this.renderList.bind(this);
}

  getState(){
    return{
      reports: []
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
    axios.get(constants.URL_REPORTLIST).then(results => {
      console.log(results.data);
      this.setState({
        reports: results.data
      });
    });

  }

    renderList(){
      if(this.state.reports==null)
      return <div>no custom Reports</div>;

      //console.log(this.state.reports);
      return this.state.reports.map(function(report, i){
        console.log(report.reportName);
      return (
        <li
        key={report.reportName} >
          {report.reportName}
        </li>
      )
    },this);
  }

    render(){
      if(this.state.reports==null)
      return <div>no custom Reports</div>;

      return  (this.state.reports.map(function(report, i){

            return (

              <li key={report.reportName} >
              <Link to={{  pathname: '/reportdetail',  search: '?sort=name',  hash: '#the-hash',  state: { report: report } }}>{report.reportName}</Link>
                </li>
            )
          },this)
        );
    }
}



export default CustomReportsList;
