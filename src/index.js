import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import App from './App';
import Home from './Home';
import submit from './submit';
import ChartDetail from './ChartDetail';
import registerServiceWorker from './registerServiceWorker';
import Chartlist from './Chartlist';
import CustomReportsList from './custom_report_list';
import SimpleReactFileUpload from './SimpleReactFileUpload';
import * as constants from './utils/GlobalConstants';
import ReportDetail from './report_detail';
ReactDOM.render(
  <Router>
  <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
       <NavLink to="/" className="navbar-brand">TB Reach 5 Dashboard</NavLink>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
             <NavLink to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
           </li>

              <li ><NavLink to="/customreportlist" className="nav-link" >Custom Report List</NavLink></li>
             <li ><NavLink to="/chartupload" className="nav-link" >Upload Chart</NavLink></li>
              <li ><NavLink to="/reportupload" className="nav-link" >Upload Report</NavLink></li>
             <li ><NavLink to="/chartlist" className="nav-link" >Chart List</NavLink></li>

         </ul>

       </div>
     </nav>
      <Route path="/customreportlist" component={CustomReportsList}/>
     <Route path="/chartlist" component={Chartlist}/>
     <Route path="/chartdetail" component={ChartDetail}/>
      <Route path="/reportdetail" component={ReportDetail}/>
      <Route path="/reportupload"  render={(props) => (<SimpleReactFileUpload  uploadType="Report Upload"  uploadUrl={constants.URL_REPORTUPLOAD} {...props}/>)}   />
      <Route path="/chartupload" render={(props) => (<SimpleReactFileUpload  uploadType="Chart Upload" uploadUrl={constants.URL_CHARTUPLOAD} {...props}/>)}   />

  </div>

  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
