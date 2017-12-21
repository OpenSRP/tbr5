import React,{Component} from 'react';


class EmbeddedReportsList extends Component{
  constructor(props){

      super(props);
      this.sendReport=this.sendReport.bind(this);
  }
  renderList(){
    return this.props.embeddedReports.map((report)=>{
    return (
      <li
      key={report.reportName} onClick={()=>this.props.selectReport(report)}>
        <a>{report.reportName}
        </a>
      </li>
    );
  });
  }

  sendReport(report){
    this.props.history.push('/reportdetail');
    this.props.selectReport(report);
  }


  render(){
    return (
      <ul className="dropdown-menu">
      {this.renderList()}
      </ul>
    );
  }
}




export default EmbeddedReportsList;
